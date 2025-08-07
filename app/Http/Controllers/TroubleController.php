<?php

namespace App\Http\Controllers;

use App\Models\Trouble;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class TroubleController extends Controller
{
    public function store(Request $request)
    {
        try {
            // ① 受信データをログ出力
            Log::debug('📥 受信データ:', $request->all());

            // ② 受信ファイルをログ出力
            Log::debug('📸 受信ファイル情報:', $request->allFiles());

            // MIME／拡張子確認用ログ
            if ($request->hasFile('report_imageUrl')) {
                foreach ($request->file('report_imageUrl') as $idx => $file) {
                    Log::debug("🛠 report_imageUrl[{$idx}] MIME:", [
                        'mime'      => $file->getClientMimeType(),
                        'extension' => $file->getClientOriginalExtension(),
                    ]);
                }
            }

            // ③ バリデーション
            $validated = $request->validate([
                'report_text'       => 'required|max:50',
                'report_imageUrl'   => 'nullable|array',
                'report_imageUrl.*' => 'mimes:jpg,jpeg,png,gif,webp,svg|max:5120',
                'troublePost_id'    => 'nullable|integer|exists:post,post_id',
                'reported_user_id'  => 'nullable|integer|exists:user,user_id',
            ]);

            // ④ ファイルを保存し、パスを配列に格納
            $paths = [];
            if ($request->hasFile('report_imageUrl')) {
                foreach ($request->file('report_imageUrl') as $file) {
                    // public ディスクの storage/app/public/troubles に保存
                    $paths[] = $file->store('troubles', 'public');
                }
            }

            // ⑤ モデル作成
            $trouble = Trouble::create([
                'reporter_user_id'  => Auth::id(),
                'troublePost_id'    => $validated['troublePost_id'] ?? null,
                'reported_user_id'  => $validated['reported_user_id'] ?? null,
                'report_text'       => $validated['report_text'],
                'report_imageUrl'   => $paths,
                'create_by'         => Auth::id(),
            ]);

            // ⑥ 成功レスポンス
            return response()->json([
                'message' => '通報が登録されました',
                'id'      => $trouble->trouble_id,
            ], 201);

        } catch (ValidationException $e) {
            // バリデーション失敗時ログ＆レスポンス
            Log::error('❌ バリデーションエラー', $e->errors());

            return response()->json([
                'message' => '入力に誤りがあります',
                'errors'  => $e->errors(),
            ], 422);
        }
    }
}

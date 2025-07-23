<?php

namespace App\Http\Controllers;

use App\Models\Trouble;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class TroubleController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'report_text'      => 'required|max:50',
            'report_imageUrl'  => 'nullable|string',
            'troublePost_id'   => 'nullable|integer|exists:post,post_id',
            'reported_user_id' => 'nullable|integer|exists:user,user_id',
        ]);

        Log::debug('✅ バリデーション成功', ['validated' => $validated]);

        $userId = Auth::id() ?? 1;
        Log::debug('👤 ユーザーID取得', ['user_id' => $userId]);

        $trouble = Trouble::create([
            'reporter_user_id'  => $userId,
            'troublePost_id'    => $validated['troublePost_id'] ?? null,
            'reported_user_id'  => $validated['reported_user_id'] ?? null,
            'report_text'       => $validated['report_text'],
            'report_imageUrl'   => $validated['report_imageUrl'] ?? null,
            'create_by'         => $userId,
        ]);

        Log::debug('📝 通報データ作成成功', ['trouble_id' => $trouble->trouble_id]);

        return response()->json(['message' => '通報が登録されました', 'trouble' => $trouble], 201);
    }
}

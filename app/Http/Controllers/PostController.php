<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostTag;
use App\Models\tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // ユーザーID取得用
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    public function store(Request $request)
    {
        Log::debug('▶ 投稿リクエスト受信', ['request' => $request->all()]);
        $validated = $request->validate([
            'title'   => 'required|max:50',
            'content' => 'nullable|max:200',
            'tags'    => 'required|array|max:3',
            'tags.*'  => 'string|max:30',
            'image_url' => 'nullable|string',
        ]);
        Log::debug('✅ バリデーション成功', ['validated' => $validated]);
        $userId = Auth::id() ?? 1;
        Log::debug('👤 ユーザーID取得', ['user_id' => $userId]);
        DB::beginTransaction();
        try {
            // 投稿作成
            $post = Post::create([
                'user_id'    => $userId,
                'title'      => $validated['title'],
                'content'    => $validated['content'] ?? '',
                'image_url'  => $validated['image_url'] ?? null,
                'create_by'  => $userId,
            ]);
            Log::debug('📝 Post 作成成功', ['post_id' => $post->post_id]);
            // タグごとに保存
            foreach ($validated['tags'] as $tagName) {
                Log::debug('🏷️ タグ処理中', ['tag' => $tagName]);
                // 既存のタグを検索、なければ作成
                $tag = tag::firstOrCreate(
                    ['tagname' => $tagName],
                    [
        'tagname'   => $tagName, // ← ここが必要
        'create_by' => $userId,
    ]
                );
                Log::debug('✅ タグ取得または作成', ['tag_id' => $tag->tag_id]);
                // post_tag に登録（中間テーブル）
                PostTag::create([
                    'post_id'   => $post->post_id,
                    'tag_id'    => $tag->tag_id,
                    'create_by' => $userId,
                ]);
            }
            Log::debug('🔗 PostTag 登録成功', [
                            'post_id' => $post->post_id,
                            'tag_id' => $tag->tag_id
                        ]);
            DB::commit();
            Log::debug('🎉 投稿処理完了');
            return response()->json(['message' => '投稿成功', 'post' => $post], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('❌ 投稿処理中に例外発生', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json(['error' => '投稿失敗', 'detail' => $e->getMessage()], 500);
        }
    }

}

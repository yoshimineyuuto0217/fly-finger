<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Exception;
use Illuminate\Foundation\Testing\Concerns\InteractsWithExceptionHandling;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use WpOrg\Requests\Port;

use function Laravel\Prompts\error;

class UserController extends Controller
{
    use InteractsWithExceptionHandling;

    // 新規登録するもの
    public function store(Request $request)
    {
        Log::debug('[UserController@store] Start', ['time' => now()->format('Y-m-d H:i:s')]);

        try {
            $validated = $request->validate([
                'name'     => 'required|string|max:255',
                'email'    => 'required|email|unique:user,email',
                'password' => 'required|string|min:6|confirmed',
            ]);

            $user = User::create([
                'name'      => $validated['name'],
                'email'     => $validated['email'],
                'password'  => Hash::make($validated['password']),
                'create_by' => Auth::id() ?? 1,
                'update_by' => Auth::id() ?? 1,
            ]);
            Auth::login($user);

            Log::debug('[UserController@store] Success', ['user_id' => $user->user_id]);

            return response()->json(['message' => '登録完了'], 201);

        } catch (Exception $e) {
            Log::error('[UserController@store] Error', [
                'message' => $e->getMessage(),
                'trace'   => $e->getTraceAsString(),
            ]);

            return response()->json(['error' => '登録に失敗しました'], 500);
        }
    }
    // 自分の情報を取得するもの
    public function me(Request $request)
    {
        try {
            $userId = $request->user();
            Log::info('プロフィール取得成功', [
                            'user_id' => $userId,
                            'timestamp' => now()->format('Y-m-d H:i:s'),
                        ]);
        return response()->json(['resolve' => "プロフィール取得成功",'user' => $userId,], 200);
        } catch (\Throwable $error) {
            Log::error("プロフィール取得エラー", [
                'exception' => $error->getMessage(),
                'trace'     => $error->getTraceAsString(),]);
        }
    }
    // 全記事取得をするAPI
    public function articlePost(){
        try{
            $allArticle = Post::with(['user:user_id,profile_img,name'])->get();
            return response()->json(['tasks'=> $allArticle],200);
        }catch (\Throwable $error) {
            Log::error("記事取得エラー", [
                'exception' => $error->getMessage(),
                'trace'     => $error->getTraceAsString(),]);
            return response()->json([
                'message' => '記事の取得に失敗しました。'
            ], 500);

        }
    }
    // プロフィール文の登録・更新
    public function patchText(Request $request)
    {
        try{
            $user = $request->user();
            $request->validate(['profile_text'=>'nullable|max:100']);
            $user->profile_text= $request->input('profile_text');
            $user->update_by = Auth::id() ?? $user->update_by;
            $user->save();
            Log::info('resolve',['user_id'=>$user->name,'更新日'=>now()->format('Y-m-d H:i:s'),]);
            return response()->json(['message'=>'更新完了','更新日'=>$user->update_at],200);
        }catch (\Throwable $e) {
            Log::error('[UserController@profileRegister] 更新失敗', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
            return response()->json(['error' => 'プロフィール更新に失敗しました'], 500);
        };
    }
    // 名前の更新
    public function patchName(Request $request)
    {
        try {
        $user = $request->user();
        $validated = $request->validate(['name'=>'max:12']);
        $user->name = $validated['name'];
        $user->save();
        return response()->json(["更新した名前は"=>$user->name]);
        }catch (\Throwable $e) {
            Log::error('[UserController@profileRegister] 更新失敗', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
            return response()->json(['error' => '名前更新に失敗しました'], 500);
        };
    }
    // 画像の更新
    public function postImage(Request $request)
    {
        try{
            $user = $request->user();
            // 画像をstorageに保存するから目の登録したものを消す
            if ($user->profile_img && Storage::disk('public')->exists($user->profile_img))
            {Storage::disk('public')->delete($user->profile_img);}
            if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('profile_img', 'public');
            $user->profile_img = $path;
            $user->save();
            Log::info(['登録成功'=>$user->profile_img ]);
            return response()->json(['message' => '画像を更新しました'], 200);
        }
        } catch(\Throwable $error) {
            Log::error("画像の更新失敗",['error'=>$error->getMessage(),'trace' => $error->getTraceAsString(),'登録失敗'=>$user->profile_img]);
            return response()->json(['error'=> '画像の更新に失敗してます'],500);
        };
    }
}

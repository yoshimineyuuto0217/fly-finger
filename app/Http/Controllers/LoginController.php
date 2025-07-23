<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie as FacadesCookie;
use Illuminate\Support\Facades\Log as FacadesLog;

class LoginController extends Controller
{
    public function login(Request $request){
        $validation = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required'
        ]);
        FacadesLog::debug('[Login][Step 2] Validation Passed', [
        'validated' => $validation,
        'time'      => now()->format('Y-m-d H:i:s'),
    ]);
        $user = User::where('email',$validation['email'])->first();
        if (! $user || ! Hash::check($validation['password'], $user->password)) {
            return response()->json(['message' => '認証に失敗しました'], 401);
        }

        // is_activeはフラグになる 以下の場合userがいるかどうかになる
        if(! $user->is_active){
            return response()->json(['message' => 'アカウントが有効ではありません'], 403);
        }
        Auth::login($user);
        $request->session()->regenerate();
        return response()->json(['message'=>'ログイン成功'],200);
    }

    public function logout(Request $request){
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    FacadesLog::debug('Logout: after', [
        'user_id'    => Auth::id(),               // null になるはず
        'session_id' => $request->session()->getId(),
        'all_data'   => $request->session()->all(), // 空配列になるはず
    ]);
    $cookieName = config('session.cookie');
    return response()->json(['message'=>'ログアウトしました'], 200)->withCookie(FacadesCookie::forget($cookieName));;
    }
}

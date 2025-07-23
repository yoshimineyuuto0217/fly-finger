<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function store(Request $request)
    {

        // バリデーション
            Log::debug('[UserController@store] Start', ['time' => now()->format('Y-m-d H:i:s')]);
        $validated = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:user,email',
            'password' => 'required|string|min:6|confirmed',
        ]);
            Log::debug('[UserController@store] Validation OK', ['validated' => $validated]);

        // ユーザー作成
        $user = User::create([
            'name'      => $validated['name'],
            'email'     => $validated['email'],
            'password'  => Hash::make($validated['password']),
            'create_by' => Auth::id() ?? 1,
            'update_by' => Auth::id() ?? 1,
        ]);

        // トークン発行（Sanctum）
        // $token = $user->createToken('registration-token')->plainTextToken;
        // JSON レスポンスでトークンを返す
        // return response()->json([
        //     'user'  => $user,
        //     'token' => $token,
        // ], 201);
        Auth::login($user);
        return response()->json(['message' => '登録完了'], 201);
    }
}

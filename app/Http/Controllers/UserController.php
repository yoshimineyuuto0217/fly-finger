<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Foundation\Testing\Concerns\InteractsWithExceptionHandling;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    use InteractsWithExceptionHandling;

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

}

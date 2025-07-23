<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class EnsureRegisteredOrLoggedIn
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // ログイン済みなら OK
        if (Auth::check()) {
            return $next($request);
        }
Log::debug('[Middleware] unauthenticated, redirecting to login', [
            'path' => $request->path(),
        ]);

        // 未ログインなら /login へリダイレクト
        return redirect()->route('login');
    }
}

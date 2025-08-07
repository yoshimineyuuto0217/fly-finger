<?php

use App\Http\Middleware\EnsureRegisteredOrLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('Layout/Top');
})->name('Top');

Route::get('/signup', function () {
    return Inertia::render('Layout/SignUp');
})->name('signup');

Route::get('/login', function () {
    return Inertia::render('Layout/Login');
})->name('login');

// 認証・登録済みのみアクセス可
Route::middleware(EnsureRegisteredOrLoggedIn::class)->group(function () {
    // メインページ群
    Route::get('/fly', fn () => Inertia::render('Layout/FlyFingerHome'))->name('fly');
    Route::get('/home', fn () => Inertia::render('Layout/Home'))->name('home');
    Route::get('/mypage', fn () => Inertia::render('Layout/MyPage'))->name('mypage');
    Route::get('/ranking', fn () => Inertia::render('Layout/Ranking'))->name('ranking');
    Route::get('/profile', fn () => Inertia::render('Layout/Profile'))->name('profile');
    Route::get('/main', fn () => Inertia::render('Layout/Main'))->name('main');

    // POST /user：セッションに保存してリダイレクト
    Route::post('/user', function (Request $request) {
        $request->session()->put('mainText', $request->input('mainText'));
        $request->session()->put('mainTitle', $request->input('mainTitle'));
        return redirect()->route('article.postShow');
    });

    // GET /user：セッションから取り出して表示
    Route::get('/user', function (Request $request) {
        return Inertia::render('Layout/User', [
            'mainTitle' => $request->session()->get('mainTitle', ''),
            'mainText'  => $request->session()->get('mainText', ''),
        ]);
    })->name('article.postShow');

    // POST /article：別セッションに保存してリダイレクト
    Route::post('/article', function (Request $request) {
        $request->session()->put('title', $request->input('title'));
        $request->session()->put('description', $request->input('description'));
        return redirect()->route('article.show');
    });

    // GET /article：セッションから取り出して表示
    Route::get('/article', function (Request $request) {
        return Inertia::render('Layout/FlyFingerPostBox', [
            'title'       => $request->session()->get('title', ''),
            'description' => $request->session()->get('description', ''),
        ]);
    })->name('article.show');
});

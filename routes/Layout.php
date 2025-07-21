<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('Layout/Top');
})->name('Top');


Route::get('/home',function(){
    return Inertia::render('Layout/Home');
})->name('home');

Route::get('/mypage',function(){
    return Inertia::render('Layout/MyPage');
})->name('mypage');

Route::get('/ranking',function(){
    return Inertia::render('Layout/Ranking');
})->name('ranking');

Route::get('/profile',function(){
    return Inertia::render('Layout/Profile');
})->name('profile');

Route::get('/main',function(){
    return Inertia::render('Layout/Main');
})->name('main');

Route::get('/login',function(){
    return Inertia::render('Layout/Login');
})->name('login');

Route::get('/csrf-token', function() {
    return response()->json(['token' => csrf_token()]);
});

Route::post('/register',[UserController::class,'store']);


// Route::get('/user',function(){
//     return Inertia::render('Layout/User');
// })->name('user');
Route::post("/user",function(Request $request){
    $request->session()->put('mainText',$request->input('mainText'));
    $request->session()->put('mainTitle',$request->input('mainTitle'));
    return redirect()->route('article.postShow');
});

Route::get("/user",function(Request $request){
    return Inertia::render('Layout/User',[
        'mainTitle' => $request->session()->get('mainTitle',''),
        'mainText' => $request->session()->get('mainText',''),
    ]);
})->name('article.postShow');



Route::get('/fly',function(){
    return Inertia::render('Layout/FlyFingerHome');
})->name('fly');


Route::post('/article', function (Request $request) {
    // フラッシュではなく「普通に」セッションに突っ込む
    $request->session()->put('title', $request->input('title'));
    $request->session()->put('description', $request->input('description'));
    // 50~55行目を実行して表示
    return redirect()->route('article.show');
});

// GET ルート。フラッシュからデータを取り出してレンダー
Route::get('/article', function (Request $request) {
    return Inertia::render('Layout/FlyFingerPostBox', [
        'title'       => $request->session()->get('title', ''),
        'description' => $request->session()->get('description', ''),
    ]);
})->name('article.show');


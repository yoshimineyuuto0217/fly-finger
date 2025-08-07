<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TroubleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web', 'auth:web'])
     ->group(function () {
         Route::get('/me', [UserController::class,'me']);
         ROUTE::get('/articlePost',[UserController::class,'articlePost']);
         Route::patch('/patchText',[UserController::class,'patchText']);
         Route::patch('/patchName',[UserController::class,'patchName']);
         Route::post('/postImage',[UserController::class,'postImage']);
         Route::post('/logout', [LoginController::class, 'logout']);
         Route::post('/article', [PostController::class,'store']);
         Route::post('/trouble', [TroubleController::class,'store']);
     });

// ログインと新規登録はゲストでも使える想定ならwebだけでOK
Route::middleware(['web'])->group(function () {
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [UserController::class, 'store']);
    Route::get('/csrf-token', function () {
        return response()->json(['token' => csrf_token()]);
    });
});

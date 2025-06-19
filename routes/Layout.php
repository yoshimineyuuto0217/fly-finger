<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('App');
})->name('App');

Route::get('/flyfinger', function () {
    return Inertia::render('FlyFinger');
})->name('flyfinger');

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

Route::get('/login',function(){
    return Inertia::render('Layout/Login');
})->name('login');


<?php

use Illuminate\Support\Facades\File;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/storage/{path}', function ($path) {
    $file = storage_path("app/public/{$path}");
    if (! File::exists($file)) {
        abort(404);
    }
    return response()->file($file, [
        'Content-Type' => File::mimeType($file),
    ]);
})->where('path', '.*');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// 新しいファィル作った時はweb.phpにrequireで呼び込む
require __DIR__.'/auth.php';
require __DIR__.'/Layout.php';
require __DIR__.'/api.php';

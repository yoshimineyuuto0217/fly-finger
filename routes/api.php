<?

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:web')
     ->group(function () {
         Route::post('/login',  [LoginController::class, 'login']);
         Route::post('/logout', [LoginController::class, 'logout']);
     });

 // 以下二つは新規登録のAPI
Route::get('/csrf-token', function() {
    return response()->json(['token' => csrf_token()]);
});
Route::post('/register',[UserController::class,'store']);



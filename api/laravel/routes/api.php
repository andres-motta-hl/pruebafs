<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\userStateController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LoanController;

//auth
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'userdata']);
});

//books

Route::controller(BookController::class, '')->group(function () {
    Route::get('/books', 'index');
    Route::get('/books/{book}', 'show');
    Route::put('/books/{book}', 'update');
});
//loans

Route::get('/loans/{userId}', [LoanController::class, 'userLoans']);
Route::post('/loans', [LoanController::class, 'addLoan']);
Route::put('/loans/{book_id}/{user_id}', [LoanController::class, 'updateLoan']);

//cateogies

Route::put('/categories/{id}', [CategoryController::class, 'getCategoryName']);
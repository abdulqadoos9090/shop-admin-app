<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {

    Route::prefix('/products')->group(function () {
        Route::get('/', [ProductController::class, 'index']);
        Route::get('/create', [ProductController::class, 'create']);
        Route::get('/{id}/edit', [ProductController::class, 'edit']);
        Route::post('/save', [ProductController::class, 'save']);
    });

    Route::prefix('/categories')->group(function () {
        Route::get('/', [CategoryController::class, 'index']);
        Route::post('/save', [CategoryController::class, 'save']);
        Route::get('/create', [CategoryController::class, 'create']);
        Route::get('/{id}/edit', [CategoryController::class, 'edit']);
    });

    Route::get('/images/{id}/delete', [\App\Http\Controllers\ImageController::class, 'delete']);
    Route::post('/move-uploaded-files', [\App\Http\Controllers\FileUploadController::class, 'moveUploadedFiles']);

});

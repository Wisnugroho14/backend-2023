<?php

use App\Http\Controllers\AnimalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Method get menampilkan semua data hewan
Route::get('/animals', [AnimalController::class, "index"]);

// Method post untuk menambahkan heeaen
Route::post('/animals', [AnimalController::class, "store"]);

// Method put untuk mengedit hewan
Route::put('/animals/{$id}', [AnimalController::class, "update"]);

// Method delete untuk menghapus data hewan
Route::delete('/animals/{$id}', [AnimalController::class, "destroy"]);
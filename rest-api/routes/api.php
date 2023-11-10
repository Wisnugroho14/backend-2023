<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\AuthController;

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

// Membuat route untuk menampilkan semua siswa
Route::middleware(['auth:sanctum'])->group(function (){
    Route::get('/students', [StudentController::class, 'index'])->middleware('auth:sanctum');

    // Menambahkan data siswa
    Route::post('/students', [StudentController::class, 'store']);
    
    // Mengupdate data siswa
    Route::put('/students/{id}', [StudentController::class, 'update']);
    
    // Menghapus data siswa
    Route::delete('/students/{id}', [StudentController::class, 'destroy']);
    
    // Mendapatkan detail data student 
    Route::get('/students/{id}', [StudentController::class, 'show']);
});  
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);



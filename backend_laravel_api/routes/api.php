<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserManagementController;

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/users', [UserManagementController::class, 'store']);
    Route::put('/users/{id}', [UserManagementController::class, 'update']);
    Route::delete('/users/{id}', [UserManagementController::class, 'destroy']);
    Route::get('/users', [UserManagementController::class, 'index']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/files/upload', [FileController::class, 'upload'])->middleware('permission:upload files');
    Route::post('/folders/create', [FileController::class, 'createFolder'])->middleware('permission:create folders');
    Route::get('/files/download/{file}', [FileController::class, 'generateDownloadLink'])->middleware('permission:view files');
    Route::get('/folders', [FileController::class, 'listFolders'])->middleware('permission:view folders');
});
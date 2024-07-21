<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController ;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\Api\FileController;

Route::post('password/email', [ForgotPasswordController::class, 'forgot']);
Route::post('password/reset', [ForgotPasswordController::class, 'reset']);

Route::post('/sign-in', [AuthController::class, 'signIn']);
Route::get('/profile', [AuthController::class, 'profile']);
Route::post('/sign-up', [AuthController::class, 'signUp']);
Route::post('/sign-out', [AuthController::class, 'signOut']);


Route::group(['prefix' => 'role', 'middleware'=>'auth:sanctum'], function () {
    Route::get('/', [RolesController::class, 'index']);
    Route::post('/store', [RolesController::class, 'store']);
    Route::get('/permission', [RolesController::class, 'createPermisson']);
    Route::get('/idRole/{id}', [RolesController::class, 'getRolePermission']);
    Route::put('/update/{id}', [RolesController::class, 'update']);
    Route::delete('/{id}', [RolesController::class, 'destroy']);
    Route::get('/name', [RolesController::class, 'normalRoles']);

});
Route::group(['prefix' => 'users' ,'middleware'=>'auth:sanctum', 'role:admin' ], function () {
    Route::post('/employees', [EmployeeController::class, 'store']);
    Route::get('/employees', [EmployeeController::class, 'index']);
    Route::get('/employees/{employee}', [EmployeeController::class, 'show']);
    Route::put('/employees/{employee}', [EmployeeController::class, 'update']);
    Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy']);
});



Route::group(['prefix' => 'permission' ,'middleware'=>'auth:sanctum' ], function () {
    Route::get('/',       [PermissionController::class, 'get']);
    Route::post('/create', [PermissionController::class, 'create']);
    Route::delete('/{id}', [PermissionController::class, 'destroy']);
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/files/upload', [FileController::class, 'upload']);
    Route::post('/folders/create', [FileController::class, 'createFolder']);
    Route::get('/folders', [FileController::class, 'listFolders']);
    Route::get('all_folders', [FileController::class, 'listAllFolders']);
});
Route::middleware('auth:api')->group(function () {
    Route::get('files/download/{file}', [FileController::class, 'download']);
});
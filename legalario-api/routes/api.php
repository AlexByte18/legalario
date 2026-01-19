<?php

use Illuminate\Support\Facades\Route;
use App\Modules\Users\Controllers\UserController;

Route::get('v1/users', [UserController::class, 'index']);
Route::post('v1/users', [UserController::class, 'create']);


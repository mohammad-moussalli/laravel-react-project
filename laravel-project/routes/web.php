<?php

use App\Http\Controllers\Web\MainController;
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

Route::get('/', [MainController::class, "index"])->name("web:index");
Route::get('/signin', [MainController::class, "index"])->name("web:signin");
Route::get('/signup', [MainController::class, "index"])->name("web:signup");
Route::get('/dashboard', [MainController::class, "index"])->name("web:dashboard");

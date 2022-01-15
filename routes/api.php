<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// this is where the sanctum used.


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('posts', 'App\Http\Controllers\API\PostController@index');
    Route::post('add', 'App\Http\Controllers\API\PostController@add');
    Route::get('edit/{id}', 'App\Http\Controllers\API\PostController@edit');
    Route::post('update/{id}', 'App\Http\Controllers\API\PostController@update');
    Route::delete('delete/{id}', 'App\Http\Controllers\API\PostController@delete');
});
// note-> in laravel 8 we have to give proper path of the controller.() no naming of shortcut applied now.)
Route::post('register', 'App\Http\Controllers\RegisterController@register');
Route::post('login', 'App\Http\Controllers\LoginController@login');

// for logout functionality
Route::post('logout', 'App\Http\Controllers\LoginController@logout');

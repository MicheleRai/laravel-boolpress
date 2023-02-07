<?php

use Illuminate\Support\Facades\Auth;
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

//  Route::get('/', function () {
//      return view('guest.home');
//  })->name('home');

Auth::routes();

//Route::get('/home', 'Admin\HomeController@index')->name('home');

Route::middleware('auth')
    ->namespace('Admin')
    ->name('admin.')
    ->prefix('admin')
    ->group(function() {
        //Route::get('/', 'HomeController@index')->name('home');
        Route::get('/home', 'HomeController@index')->name('home');
        Route::resource('posts', 'PostController');
        Route::get('/categories/slug', 'CategoryController@slug')->name('categories.slug');
        Route::resource('categories', 'CategoryController');
    });

Route::get('/categories/{category}', 'Admin\CategoryController@slug')->name('categories.slug');

Route::get('{any?}', function () {
    return view('guest.home');
})->where("any", ".*")->name('guest.home');

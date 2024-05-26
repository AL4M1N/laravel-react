<?php

use Illuminate\Support\Facades\Route;

//Auth & forget password Route
Route::namespace('App\Http\Controllers\Auth')->group(function () {
    Route::get('/admin-login',                   'LoginController@index')->name('admin-login');
    Route::post('/login-check',                  'LoginController@authenticate');
    Route::get('/recover-password/{email}',      'LoginController@recover_password');
    Route::get('/reset_confirm/{email}',         'LoginController@reset_confirm');
    Route::get('/check_remember_token/{email}',  'LoginController@check_remember_token');
    Route::post('/change_password',              'LoginController@changePassword');
    Route::post('/update_password',               'LoginController@update_password');
    Route::get('/do-logout',                     'LoginController@logout')->name('do-logout');
});

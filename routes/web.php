<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('website.index');
});

// Route::get('/admin', function () {
//     return view('admin.index');
// });

Route::get('/404', function () {
    return view('website.404');
})->name('404');




<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [ArticleController::class, 'index'])->name('welcome');
Route::get('/article/{id}', [ArticleController::class, 'show'])->name('article.show');


require __DIR__.'/auth.php';

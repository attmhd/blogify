<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;



Route::get('/', [ArticleController::class, 'index'])->name('welcome');
Route::get('/article/{id}', [ArticleController::class, 'show'])->name('article.show');



Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/admin/login'); // Redirect setelah logout
});


require __DIR__.'/auth.php';

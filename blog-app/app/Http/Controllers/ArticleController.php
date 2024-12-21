<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Article;
use App\Model\Category;

class ArticleController extends Controller
{
    

    public function index()
    {
        $articles = Article::paginate(5);
        return Inertia::render('Welcome', [
            'articles' => $articles,
        ]);
    }
    
    public function show($id)
    {
        $article = Article::find($id);
        return Inertia::render('DetailPost', [
            'article' => $article,
        ]);
    }
}

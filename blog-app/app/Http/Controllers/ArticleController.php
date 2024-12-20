<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    protected $article;

    public function __construct(Article $article)
    {
        $this->article = $article;
    }

    public function index()
    {
        $articles = $this->article->latest()->get();
        return view('welcome', compact('articles'));
        // return response()->json(['status' => 200, 'message' => 'Success', 'data' => $articles]);
    }
    
}

<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PostsController extends Controller
{
    public function index()
    {
        $category = Category::all();
        $posts = Post::with('category','article')->paginate(5);
        return Inertia::render('Welcome', [
            'posts' => $posts,
            'category' => $category

        ]);

        // return response()->json($posts, $category);
    }
}

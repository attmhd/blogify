<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Article;
use App\Models\Category;
use App\Models\Post;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array


    {
        $articles = Article::all();
        $articleCount = $articles->count();

        $categories = Category::all();
        $categoriesCount = $categories->count();

        $post = Post::all();
        $postCount = $post->count();
        
        return [
            Stat::make('Total articles', $articleCount),
            Stat::make('Total categories', $categoriesCount),
            Stat::make('Total posts', $postCount),
        ];
    }
   
}

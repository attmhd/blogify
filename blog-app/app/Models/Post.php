<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Post extends Model
{
    use HasFactory;
    protected $fillable = ['category_id', 'article_id', 'username','link_artikel', 'post_date'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function article(){

        return $this->belongsTo(Article::class);
    }
    
}

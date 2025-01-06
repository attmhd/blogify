<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Article extends Model
{
    use HasFactory;

    protected $fillable = ['title','is_published', 'content'];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}

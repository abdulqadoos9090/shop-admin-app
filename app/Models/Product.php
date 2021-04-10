<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'category_id', 'general', 'variations', 'shipping', 'images', 'metadata'];

    protected $casts = [
        'images' => 'array',
        'general' => 'json',
        'variations' => 'json',
        'shipping' => 'json',
        'metadata' => 'json',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function comments()
    {
        return $this->hasMany(Comments::class);
    }
}

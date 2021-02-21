<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = ['alt_tag', 'description', 'url', 'index', 'type'];

    public function productImage()
    {
        return $this->hasOne(ProductImage::class);
    }

}

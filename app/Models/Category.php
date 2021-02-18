<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['meta_data_id', 'label', 'status'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function metaData()
    {
        return $this->belongsTo(MetaData::class);
    }
}

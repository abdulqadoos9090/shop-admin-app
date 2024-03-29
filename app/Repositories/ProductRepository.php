<?php


namespace App\Repositories;


use App\Models\Product;

class ProductRepository
{
    protected $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function all()
    {
        return $this->product->with('category')->get();
    }

    public function find($id)
    {
        return $this->product->find($id);
    }

    public function save($data)
    {
        return $this->product->updateOrCreate(['id' => $data['id']], $data);
    }

    public function verifyUniqueSlug($slug)
    {
        return $this->product->whereJsonContains('metadata', ["slug" => $slug])->pluck('id');
    }

}

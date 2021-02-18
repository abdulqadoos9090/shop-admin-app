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
        return $this->product->with('metaData')->get();
    }

    public function create($data)
    {
        return $this->product->create($data);
    }

    public function update($data)
    {
        return $this->product->find($data['id'])->update($data);
    }


    public function findWithMetaData($id)
    {
        return $this->product->with('metaData')->find($id);
    }

}

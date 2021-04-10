<?php


namespace App\Services;

use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\Auth;

class ProductService
{
    protected $productRepository, $productImagePaths, $productData = null;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function all()
    {
        return $this->productRepository->all();
    }

    public function find($id)
    {
        return $this->productRepository->find($id);
    }

    public function save($request)
    {
//        dd($request->all());
        $this->productData = $request->all();
        $request->has('images') ? $this->uploadProductImages($request->images) : null;
        $this->productData['images'] = $this->productImagePaths;
        $this->productData['user_id'] = Auth::id();
        return $this->productRepository->save($this->productData);
    }

    public function uploadProductImages($images)
    {
        foreach ($images as $key => $image) {
            $name = $key . time() . '.' . $image->extension();
            $image->move(public_path('images/product-images'), $name);
            $this->productImagePaths[$key] = 'images/product-images/' . $name;
        }
        return $this->productImagePaths ? $this->productImagePaths : $this->productImagePaths = 'images/product-images/default.jpg';
    }

}

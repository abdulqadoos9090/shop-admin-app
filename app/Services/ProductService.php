<?php


namespace App\Services;

use App\Constants;
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
        $this->productData = $request->all();
        unset($this->productData['files']);
        $this->productData['user_id'] = Auth::id();
        return $this->productRepository->save($this->productData);
    }

    public function verifyUniqueSlug($request)
    {
        return $this->productRepository->verifyUniqueSlug($request->slug);
    }

}

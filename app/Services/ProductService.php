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

//        $request->has('files') ?
//            $this->productImagePaths = $this->moveUploadedFilesToDirectory($request->files, Constants::PRODUCT_IMAGES_DIRECTORY)
//            : $this->productImagePaths = Constants::DEFAULT_PRODUCT_IMAGE;

        $this->productData = $request->all();
        unset($this->productData['files']);
        $this->productData['user_id'] = Auth::id();
        return $this->productRepository->save($this->productData);
    }

    public function moveUploadedFilesToDirectory($files, $directory)
    {
        $filePaths = null;
        foreach ($files as $key => $file) {
            $name = $key . time() . '.' . $file->extension();
            $file->move(public_path($directory), $name);
            $filePaths[$key] = $directory . $name;
        }
        return $filePaths;
    }

}

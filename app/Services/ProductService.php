<?php


namespace App\Services;


use App\Constants;
use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProductService
{
    protected $productRepository, $imageService, $metaDataService;

    public function __construct(ProductRepository $productRepository, ImageService $imageService, MetaDataService $metaDataService)
    {
        $this->productRepository = $productRepository;
        $this->imageService = $imageService;
        $this->metaDataService = $metaDataService;
    }

    public function all()
    {
        return $this->productRepository->all();
    }

    public function getProductById($id)
    {
        return $this->productRepository->getProductById($id);
    }

    public function save($request)
    {
//        dd($request->all());
        if (isset($request->form_data['id']) && $request->form_data['id']) {
            $this->metaDataService->save($request->meta_data);
            $this->productRepository->update($request->form_data);
            if ($request->hasFile('images')) {
                $this->imageService->uploadProductImages($request->images, $request->form_data['id']);
            }
            return true;
        } else {
            $data = $request->form_data;
            $metaData = $this->metaDataService->save($request->meta_data);
            $data['meta_data_id'] = $metaData->id;
            $data['user_id'] = Auth::id();
            $product = $this->productRepository->create($data);
            if ($request->hasFile('images')) {
                $this->imageService->uploadProductImages($request->images, $product->id);
            }
            return false;
        }

    }

}

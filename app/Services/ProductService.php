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


    public function findWithMetaData($id)
    {
        return $this->productRepository->findWithMetaData($id);
    }

    public function save($request)
    {
        if (isset($request->form_data['id']) && $request->form_data['id']) {
            $this->metaDataService->save($request->meta_data);
            $product = $this->productRepository->update($request->form_data);
            if ($request->hasFile('images')) {
                return $this->imageService->uploadProductImages($request->images, $product);
            }
        } else {
            $data = $request->form_data;
            $metaData = $this->metaDataService->save($request->meta_data);
            $data['meta_data_id'] = $metaData->id;
            $data['user_id'] = Auth::id();
            $data['category_id'] = 1;
            $product = $this->productRepository->create($data);
            if ($request->hasFile('images')) {
                return $this->imageService->uploadProductImages($request->images, $product);
            }
        }
    }
}

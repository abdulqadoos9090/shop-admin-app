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

    public function save($request)
    {
        $metaData = [
            'title' => $request->metaTitle,
            'description' => $request->metaDescription,
            'slug' => $request->metaSlug,
            'index' => Constants::DEFAULT_INDEX,
        ];
        $metaData = $this->metaDataService->save($metaData);
        $productData = [
            'user_id' => Auth::id(),
            'category_id' => 1,
            'meta_data_id' => $metaData->id,
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock,
            'details' => $request->details,
            'status' => Constants::STATUS_PENDING,
        ];
        $product = $this->productRepository->save($productData);
        if ($request->hasFile('images')) {
            foreach ($request->images as $image) {
                $imageMetaData = [
                    'alt_tag' => Constants::DEFAULT_ALT_TAG,
                    'description' => Constants::DEFAULT_DESCRIPTION,
                    'index' => Constants::DEFAULT_INDEX,
                    'type' => Constants::DEFAULT_IMAGE_TYPE
                ];
                $image = $this->imageService->save($image, $imageMetaData);
                DB::table('product_image')->insert([
                    'product_id' => $product->id,
                    'image_id' => $image->id
                ]);
            }
        }
    }
}

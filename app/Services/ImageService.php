<?php


namespace App\Services;


use App\Constants;
use App\Repositories\ImageRepository;
use Illuminate\Support\Facades\DB;

class ImageService
{
    protected $imageRepository;

    public function __construct(ImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    public function uploadProductImages($images,$product){
        foreach ($images as $image) {
            $image = $this->save($image);
            DB::table('product_image')->insert([
                'product_id' => $product->id,
                'image_id' => $image->id
            ]);
        }
    }

    public function save($image)
    {
        $imageMetaData = [
            'alt_tag' => Constants::DEFAULT_ALT_TAG,
            'description' => Constants::DEFAULT_DESCRIPTION,
            'index' => Constants::DEFAULT_INDEX,
            'type' => Constants::DEFAULT_IMAGE_TYPE
        ];

        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('images'), $imageName);
        $imageMetaData['url'] = "images/".$imageName;
        return $this->imageRepository->save($imageMetaData);
    }
}

<?php


namespace App\Services;


use App\Constants;
use App\Repositories\ImageRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class FileUploadService
{
    protected $imageRepository;

    public function __construct(ImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    public function uploadProductImages($images, $productId)
    {
        foreach ($images as $image) {
            $image = $this->save($image);
            DB::table('product_images')->insert([
                'product_id' => $productId,
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
        $imageName = time() . '-' . $image->getClientOriginalName();
        $image->move(public_path('images'), $imageName);
        $imageMetaData['url'] = "images/" . $imageName;
        return $this->imageRepository->save($imageMetaData);
    }

    public function delete($request)
    {
        return $this->imageRepository->delete($request->route("id"));
    }
}

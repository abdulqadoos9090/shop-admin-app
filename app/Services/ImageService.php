<?php


namespace App\Services;


use App\Repositories\ImageRepository;

class ImageService
{
    protected $imageRepository;

    public function __construct(ImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    public function save($image, $imageMetaData)
    {
        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('images'), $imageName);
        $imageMetaData['url'] = "images/".$imageName;
        return $this->imageRepository->save($imageMetaData);
    }
}

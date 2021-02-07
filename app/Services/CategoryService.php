<?php


namespace App\Services;


use App\Constants;
use App\Repositories\CategoryRepository;

class CategoryService
{
    protected $categoryRepository, $metaDataService;

    public function __construct(CategoryRepository $categoryRepository, MetaDataService $metaDataService)
    {
        $this->categoryRepository = $categoryRepository;
        $this->metaDataService = $metaDataService;
    }

    public function all()
    {
        return $this->categoryRepository->all();
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

        $data = [
            'meta_data_id' => $metaData->id,
            'label' => $request->label,
            'status' => Constants::STATUS_PENDING,
        ];

        return $this->categoryRepository->save($data);
    }

}

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

    public function findWithMetaData($id)
    {
        return $this->categoryRepository->findWithMetaData($id);
    }

    public function save($request)
    {
        if (isset($request->form_data['id']) && $request->form_data['id']) {
            $this->metaDataService->save($request->meta_data);
            return $this->categoryRepository->update($request->form_data);
        } else {
            $data = $request->form_data;
            $metaData = $this->metaDataService->save($request->meta_data);
            $data['meta_data_id'] = $metaData->id;
            return $this->categoryRepository->create($data);
        }
    }

}

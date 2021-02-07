<?php


namespace App\Services;


use App\Repositories\MetaDataRepository;

class MetaDataService
{
    protected $metaDataRepository;

    public function __construct(MetaDataRepository $metaDataRepository)
    {
        $this->metaDataRepository = $metaDataRepository;
    }

    public function save($metaData)
    {
        return $this->metaDataRepository->save($metaData);
    }
}

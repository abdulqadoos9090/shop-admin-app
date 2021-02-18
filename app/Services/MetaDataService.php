<?php


namespace App\Services;

use App\Constants;
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
        if (isset($metaData['id']) && $metaData['id']) return $this->metaDataRepository->update($metaData);
        return $this->metaDataRepository->create($metaData);
    }
}

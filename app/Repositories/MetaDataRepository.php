<?php


namespace App\Repositories;


use App\Models\MetaData;

class MetaDataRepository
{
    protected $metaData;

    public function __construct(MetaData $metaData)
    {
        $this->metaData = $metaData;
    }

    public function all()
    {
        return $this->metaData->all();
    }

    public function save($data)
    {
        return $this->metaData->create($data);
    }
}

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

    public function create($data)
    {
        return $this->metaData->create($data);
    }

    public function update($data)
    {
        return $this->metaData->find($data['id'])->update($data);
    }
}

<?php


namespace App\Repositories;


use App\Models\Category;

class CategoryRepository
{

    protected $category;

    public function __construct(Category $category)
    {
        $this->category = $category;
    }

    public function all()
    {
        return $this->category->get();
    }

    public function getAllCategoriesWithRelations()
    {
        return $this->category->with('metaData')->get();
    }

    public function findWithMetaData($id)
    {
        return $this->category->with('metaData')->find($id);
    }

    public function create($data)
    {
        return $this->category->create($data);
    }

    public function update($data)
    {
        return $this->category->find($data['id'])->update($data);
    }
}

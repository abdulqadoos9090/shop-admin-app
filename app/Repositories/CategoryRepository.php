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
        return $this->category->all();
    }

    public function save($data)
    {
        return $this->category->create($data);
    }
}

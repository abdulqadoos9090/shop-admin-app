<?php

namespace App\Http\Controllers;

use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    protected $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        return inertia('Categories/Index', [
            'categories' => $this->categoryService->all()
        ]);
    }

    public function create()
    {
        return inertia('Categories/Form');
    }

    public function save(Request $request)
    {
        return $this->categoryService->save($request);
    }

}

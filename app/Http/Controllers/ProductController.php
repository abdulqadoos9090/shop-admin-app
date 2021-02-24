<?php

namespace App\Http\Controllers;

use App\Services\CategoryService;
use App\Services\ProductService;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    protected $productService, $categoryService;

    public function __construct(ProductService $productService, CategoryService $categoryService)
    {
        $this->productService = $productService;
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        return inertia('Products/Index', [
            'products' => $this->productService->all(),
        ]);
    }

    public function create()
    {
        return inertia('Products/Form', [
            'product' => null,
            'categories' => $this->categoryService->all()
        ]);
    }

    public function edit($id)
    {
        return inertia('Products/Form', [
            'product' => $this->productService->getProductById($id),
            'categories' => $this->categoryService->all()
        ]);
    }

    public function save(Request $request)
    {
        $isSaved = $this->productService->save($request);
        return $isSaved ? redirect()->back() : redirect('/products');
    }
}

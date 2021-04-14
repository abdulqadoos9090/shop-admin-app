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
        try {
            return inertia('Products/Index',["products" => $this->productService->all()]);
        } catch (\Exception $exception) {
            dd($exception);
        }
    }

    public function create()
    {
        try {
            return inertia('Products/Form', ['categories' => $this->categoryService->all()]);
        } catch (\Exception $exception) {
            dd($exception);
        }
    }

    public function edit($id)
    {
        try {
            return inertia('Products/Form', [
                'product' => $this->productService->find($id),
                'categories' => $this->categoryService->all()
            ]);
        } catch (\Exception $exception) {
            dd($exception);
        }
    }

    public function save(Request $request)
    {
        try {
            return $this->productService->save($request) ? redirect()->back() : redirect('/products');
        } catch (\Exception $exception) {
            dd($exception);
        }
    }

    public function verifyUniqueSlug(Request $request){
        try{
            return $this->productService->verifyUniqueSlug($request);
        }catch (\Exception $exception){
            dd($exception);
        }
    }
}

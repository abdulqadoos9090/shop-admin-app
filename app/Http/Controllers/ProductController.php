<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index()
    {
        return inertia('Products/Index', [
            'products' => $this->productService->all()
        ]);
    }

    public function create()
    {
        return inertia('Products/Form', ['product' => null]);
    }

    public function edit($id)
    {
        return inertia('Products/Form', [
            'product' => $this->productService->findWithMetaData($id)
        ]);
    }

    public function save(Request $request)
    {
        $this->productService->save($request);
        return redirect('/products');
    }
}

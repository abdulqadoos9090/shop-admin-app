<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return inertia('Products/Index', [
            'products' => ['abc', 'def']
        ]);
    }
    public function create()
    {
        return inertia('Products/Form', [
            'products' => ['abc', 'def']
        ]);
    }
}

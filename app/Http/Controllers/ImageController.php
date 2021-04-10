<?php

namespace App\Http\Controllers;

use App\Services\FileUploadService;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    protected $imageService;

    public function __construct(FileUploadService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function delete(Request $request)
    {
        $isDeleted = $this->imageService->delete($request);
        return $isDeleted ? redirect()->back() : null;
    }
}

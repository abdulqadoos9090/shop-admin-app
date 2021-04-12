<?php

namespace App\Http\Controllers;

use App\Constants;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    protected $filePaths = [];

    public function moveUploadedFiles(Request $request)
    {
        return $request->has('files') ?
            $this->moveUploadedFilesToDirectory($request->files->all(), $request->directory)
            : Constants::DEFAULT_PRODUCT_IMAGE;
    }

    public function moveUploadedFilesToDirectory($files, $directory)
    {
        foreach ($files['files'] as $key => $value) {
            $name = $key . time() . $value->getClientOriginalName();
            $value->move(public_path($directory), $name);
            $this->filePaths[] = $directory . '/' . $name;
        }
        return $this->filePaths;
    }
}

<?php

namespace App\Http\Controllers\web\app;

use App\Http\Controllers\Controller;
use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use mysql_xdevapi\Exception;

class UploadController extends Controller
{
    //

    public function store(Request $request)
    {
        $fold = 'accessbile';
        if ($request->file('myname')) {
            $file = $request->file('myname');
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storePubliclyAs('public/tmp/events/' . $folder, $file->getClientOriginalName());
            $path = storage_path('app/public/tmp/events' . $folder . '/' . $file->getClientOriginalName());

            TemporaryFile::create([
                'folder' => $folder,
                'filename' => $file->getClientOriginalName()
            ]);


            return $folder;
        }
        return "";
    }
}

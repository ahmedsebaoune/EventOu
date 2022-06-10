<?php

namespace App\Http\Controllers\web\app;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    //
    public function show()
    {
        return Inertia::render('App/Profile/Home');
    }


}

<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HandleInertiaAdminRequests extends HandleInertiaRequests
{
    protected $rootView = 'admin';


}

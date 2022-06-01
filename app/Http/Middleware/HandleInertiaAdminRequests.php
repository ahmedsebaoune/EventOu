<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HandleInertiaAdminRequests extends HandleInertiaRequests
{

    protected $rootView = 'app';

}

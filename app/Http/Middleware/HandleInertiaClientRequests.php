<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HandleInertiaClientRequests extends HandleInertiaRequests
{

    protected $rootView = 'guest';

}

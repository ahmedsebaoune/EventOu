<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\City;

class EventController extends Controller
{
    //
    public function communes(City $city)
    {
        return $city->communes;
    }
}

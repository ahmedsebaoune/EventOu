<?php

namespace App\Http\Controllers\web\app;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEventRequest;
use App\Models\Category;
use App\Models\City;
use App\Models\Event;
use App\Models\TemporaryFile;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('App/Event');
    }

    public function show()
    {
        return Inertia::render('App/Event');
    }

    public function addEvent()
    {
        return Inertia::render('App/Profile/AddEvent',
            [
                'AHMED'=>'SSS',
                'categories' => fn() => Category::all()->toJson(),
                'cities' => fn() => City::all()->toJson(),
            ]
        );
    }


    public function store(StoreEventRequest $request)
    {
        $validated = $request->validated();
        $folder = $request->photo_path;
        $filename = TemporaryFile::where('folder', $folder)->first()->filename;
        $temp = 'tmp/events/' . $folder . '/' . $filename;
        $public_event = 'events/' . Auth::id() . '-' . $filename . now()->timestamp;
        Storage::disk('public')->move($temp, $public_event);


        $temps = TemporaryFile::all();
//        delete temp folders and lines from database as well
        foreach ($temps as $temp) {
            $path = 'tmp/events/' . $temp->folder;
            if (Carbon::now() > $temp->created_at->addHour())
                if (Storage::disk('public')->exists($path)) {
                    Storage::disk('public')->deleteDirectory(($path));
                    $temp->delete();
                }
        }

        Event::create(
            array_merge(
                $request->only('name'), [
                'user_id' => Auth::id(),
                'photo_path' => $public_event,
            ])
        );
        return Redirect::route('profile.home');
    }

    public function userEvents()
    {
        $user = Auth::user();

        return Inertia::render('App/Profile/MyEventsList',
            [
                'events' => $user->events->toJson()
            ]
        );

    }
}

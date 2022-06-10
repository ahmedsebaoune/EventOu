<?php

use App\Http\Controllers\web\app\EventController;
use App\Http\Controllers\web\app\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\web\app\UploadController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/redirects',
    [
        function () {
            return back();
        }
    ]);

Route::get('/', function () {
    return Inertia::render('App/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/event', [EventController::class, 'show']);


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {


    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::group(['prefix' => '/profile'], function () {
        Route::get('/', [ProfileController::class, 'show'])->name('profile.home');
        Route::get('/event/add', [EventController::class, 'addEvent']);
        Route::post('/event/add', [EventController::class, 'store']);
        Route::get('/events', [EventController::class, 'userEvents']);
    });
});
Route::post('uploads',[UploadController::class, 'store']);

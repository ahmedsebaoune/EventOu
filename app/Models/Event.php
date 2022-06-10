<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Event
 * 
 * @property int $id
 * @property string|null $name
 * @property string|null $description
 * @property float|null $entry_price
 * @property Carbon|null $start_date
 * @property Carbon|null $start_time
 * @property Carbon|null $end_time
 * @property int|null $days
 * @property string|null $photo_path
 * @property string|null $thumbnail
 * @property int|null $hot
 * @property int|null $host_id
 * @property int|null $user_id
 * @property int|null $category_id
 * @property int|null $commune_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Category|null $category
 * @property Commune|null $commune
 * @property Host|null $host
 * @property User|null $user
 * @property Collection|Comment[] $comments
 * @property Collection|EventImage[] $event_images
 * @property Collection|EventSchedule[] $event_schedules
 * @property Collection|Speaker[] $speakers
 * @property Collection|User[] $users
 *
 * @package App\Models
 */
class Event extends Model
{
	protected $table = 'events';

	protected $casts = [
		'entry_price' => 'float',
		'days' => 'int',
		'hot' => 'int',
		'host_id' => 'int',
		'user_id' => 'int',
		'category_id' => 'int',
		'commune_id' => 'int'
	];

	protected $dates = [
		'start_date',
		'start_time',
		'end_time'
	];

	protected $fillable = [
		'name',
		'description',
		'entry_price',
		'start_date',
		'start_time',
		'end_time',
		'days',
		'photo_path',
		'thumbnail',
		'hot',
		'host_id',
		'user_id',
		'category_id',
		'commune_id'
	];

	public function category()
	{
		return $this->belongsTo(Category::class);
	}

	public function commune()
	{
		return $this->belongsTo(Commune::class);
	}

	public function host()
	{
		return $this->belongsTo(Host::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function comments()
	{
		return $this->hasMany(Comment::class);
	}

	public function event_images()
	{
		return $this->hasMany(EventImage::class);
	}

	public function event_schedules()
	{
		return $this->hasMany(EventSchedule::class);
	}

	public function speakers()
	{
		return $this->belongsToMany(Speaker::class, 'event_speakers')
					->withTimestamps();
	}

	public function users()
	{
		return $this->belongsToMany(User::class, 'event_user_reactions')
					->withPivot('content', 'value')
					->withTimestamps();
	}
}

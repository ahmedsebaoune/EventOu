<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EventSchedule
 * 
 * @property int $day
 * @property int $event_id
 * @property string|null $description
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Event $event
 *
 * @package App\Models
 */
class EventSchedule extends Model
{
	protected $table = 'event_schedules';
	public $incrementing = false;

	protected $casts = [
		'day' => 'int',
		'event_id' => 'int'
	];

	protected $fillable = [
		'description'
	];

	public function event()
	{
		return $this->belongsTo(Event::class);
	}
}

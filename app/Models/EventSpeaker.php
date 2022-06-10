<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EventSpeaker
 * 
 * @property int|null $event_id
 * @property int|null $speaker_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Event|null $event
 * @property Speaker|null $speaker
 *
 * @package App\Models
 */
class EventSpeaker extends Model
{
	protected $table = 'event_speakers';
	public $incrementing = false;

	protected $casts = [
		'event_id' => 'int',
		'speaker_id' => 'int'
	];

	protected $fillable = [
		'event_id',
		'speaker_id'
	];

	public function event()
	{
		return $this->belongsTo(Event::class);
	}

	public function speaker()
	{
		return $this->belongsTo(Speaker::class);
	}
}

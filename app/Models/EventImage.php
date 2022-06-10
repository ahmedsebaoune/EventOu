<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EventImage
 * 
 * @property int $id
 * @property string|null $image_path
 * @property int|null $event_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Event|null $event
 *
 * @package App\Models
 */
class EventImage extends Model
{
	protected $table = 'event_images';

	protected $casts = [
		'event_id' => 'int'
	];

	protected $fillable = [
		'image_path',
		'event_id'
	];

	public function event()
	{
		return $this->belongsTo(Event::class);
	}
}

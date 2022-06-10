<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Speaker
 * 
 * @property int $id
 * @property string|null $name
 * @property string|null $description
 * @property string|null $instagram_link
 * @property string|null $linkedin_link
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Event[] $events
 *
 * @package App\Models
 */
class Speaker extends Model
{
	protected $table = 'speakers';

	protected $fillable = [
		'name',
		'description',
		'instagram_link',
		'linkedin_link'
	];

	public function events()
	{
		return $this->belongsToMany(Event::class, 'event_speakers')
					->withTimestamps();
	}
}

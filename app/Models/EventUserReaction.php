<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EventUserReaction
 * 
 * @property int $event_id
 * @property int $user_id
 * @property string|null $content
 * @property int|null $value
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Event $event
 * @property User $user
 *
 * @package App\Models
 */
class EventUserReaction extends Model
{
	protected $table = 'event_user_reactions';
	public $incrementing = false;

	protected $casts = [
		'event_id' => 'int',
		'user_id' => 'int',
		'value' => 'int'
	];

	protected $fillable = [
		'content',
		'value'
	];

	public function event()
	{
		return $this->belongsTo(Event::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}

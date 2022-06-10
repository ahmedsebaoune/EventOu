<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Comment
 * 
 * @property int $id
 * @property int $user_id
 * @property int $event_id
 * @property int $comment_id
 * @property string|null $content
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Comment $comment
 * @property Event $event
 * @property User $user
 * @property Collection|Comment[] $comments
 *
 * @package App\Models
 */
class Comment extends Model
{
	protected $table = 'comments';

	protected $casts = [
		'user_id' => 'int',
		'event_id' => 'int',
		'comment_id' => 'int'
	];

	protected $fillable = [
		'user_id',
		'event_id',
		'comment_id',
		'content'
	];

	public function comment()
	{
		return $this->belongsTo(Comment::class);
	}

	public function event()
	{
		return $this->belongsTo(Event::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function comments()
	{
		return $this->hasMany(Comment::class);
	}
}

<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Host
 * 
 * @property int $id
 * @property string|null $name
 * @property string|null $address
 * @property string|null $phone_number
 * @property string|null $facebook_link
 * @property string|null $instagram_link
 * @property int $user_id
 * @property int $host_type_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property HostType $host_type
 * @property User $user
 * @property Collection|Event[] $events
 *
 * @package App\Models
 */
class Host extends Model
{
	protected $table = 'hosts';

	protected $casts = [
		'user_id' => 'int',
		'host_type_id' => 'int'
	];

	protected $fillable = [
		'name',
		'address',
		'phone_number',
		'facebook_link',
		'instagram_link',
		'user_id',
		'host_type_id'
	];

	public function host_type()
	{
		return $this->belongsTo(HostType::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function events()
	{
		return $this->hasMany(Event::class);
	}
}

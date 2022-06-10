<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Commune
 * 
 * @property int $id
 * @property string|null $name
 * @property string|null $ar_name
 * @property int $city_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property City $city
 * @property Collection|Event[] $events
 *
 * @package App\Models
 */
class Commune extends Model
{
	protected $table = 'communes';

	protected $casts = [
		'city_id' => 'int'
	];

	protected $fillable = [
		'name',
		'ar_name',
		'city_id'
	];

	public function city()
	{
		return $this->belongsTo(City::class);
	}

	public function events()
	{
		return $this->hasMany(Event::class);
	}
}

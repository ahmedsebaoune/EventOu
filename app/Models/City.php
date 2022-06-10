<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class City
 * 
 * @property int $id
 * @property int|null $code
 * @property string|null $name
 * @property string|null $ar_name
 * @property bool $hot
 * @property string|null $photo_path
 * @property int $country_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Country $country
 * @property Collection|Commune[] $communes
 *
 * @package App\Models
 */
class City extends Model
{
	protected $table = 'cities';

	protected $casts = [
		'code' => 'int',
		'hot' => 'bool',
		'country_id' => 'int'
	];

	protected $fillable = [
		'code',
		'name',
		'ar_name',
		'hot',
		'photo_path',
		'country_id'
	];

	public function country()
	{
		return $this->belongsTo(Country::class);
	}

	public function communes()
	{
		return $this->hasMany(Commune::class);
	}
}

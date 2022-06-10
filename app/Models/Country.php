<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Country
 * 
 * @property int $id
 * @property string|null $name
 * @property string|null $phone_code
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|City[] $cities
 *
 * @package App\Models
 */
class Country extends Model
{
	protected $table = 'countries';

	protected $fillable = [
		'name',
		'phone_code'
	];

	public function cities()
	{
		return $this->hasMany(City::class);
	}
}

<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class HostType
 * 
 * @property int $id
 * @property string|null $name
 * @property bool $status
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Host[] $hosts
 *
 * @package App\Models
 */
class HostType extends Model
{
	protected $table = 'host_types';

	protected $casts = [
		'status' => 'bool'
	];

	protected $fillable = [
		'name',
		'status'
	];

	public function hosts()
	{
		return $this->hasMany(Host::class);
	}
}

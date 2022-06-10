<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Category
 * 
 * @property int $id
 * @property string|null $name
 * @property string|null $photo_path
 * @property string|null $thumbnail
 * @property bool $status
 * @property int $number_of_products
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Event[] $events
 *
 * @package App\Models
 */
class Category extends Model
{
	protected $table = 'categories';

	protected $casts = [
		'status' => 'bool',
		'number_of_products' => 'int'
	];

	protected $fillable = [
		'name',
		'photo_path',
		'thumbnail',
		'status',
		'number_of_products'
	];

	public function events()
	{
		return $this->hasMany(Event::class);
	}
}

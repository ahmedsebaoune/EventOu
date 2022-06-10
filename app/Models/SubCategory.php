<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SubCategory
 * 
 * @property int $id
 * @property string|null $name
 * @property bool $status
 * @property int $number_of_products
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class SubCategory extends Model
{
	protected $table = 'sub_categories';

	protected $casts = [
		'status' => 'bool',
		'number_of_products' => 'int'
	];

	protected $fillable = [
		'name',
		'status',
		'number_of_products'
	];
}

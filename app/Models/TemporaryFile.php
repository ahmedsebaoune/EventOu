<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TemporaryFile
 * 
 * @property int $id
 * @property string $folder
 * @property string $filename
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class TemporaryFile extends Model
{
	protected $table = 'temporary_files';

	protected $fillable = [
		'folder',
		'filename'
	];
}

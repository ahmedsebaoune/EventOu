<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Langue'],
            ['name' => 'Divertissement'],
            ['name' => 'Environement'],
            ['name' => 'Informatique'],
            ['name' => 'Tech']
        ]);
        DB::table('countries')->insert([
            'id' => 1,
            'name'=> 'Algeria',

        ]);

        // \App\Models\User::factory(10)->create();
    }
}

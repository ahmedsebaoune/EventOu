<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->decimal('entry_price', $precision = 8, $scale = 1)->nullable();
            $table->date('start_date')->nullable();
            $table->time('start_time', $precision = 0)->nullable();
            $table->date('end_date')->nullable();
            $table->string('photo_path', 2048)->nullable();
            $table->string('thumbnail', 2048)->nullable();
            $table->bigInteger('hot')->default(0)->nullable();
            $table->unsignedBigInteger('host_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('commune_id')->nullable();
            $table->foreign('host_id')->references('id')->on('hosts');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('commune_id')->references('id')->on('communes');
            $table->decimal('long', 10, 7);
            $table->decimal('lat', 10, 7);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_schedules', function (Blueprint $table) {
            $table->unsignedBigInteger('day')->nullable();
            $table->unsignedBigInteger('event_id')->nullable();
            $table->foreign('event_id')->references('id')->on('events')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });
        DB::unprepared('ALTER TABLE `event_schedules` ADD PRIMARY KEY (`event_id` , `day` )');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_schedules');
    }
}

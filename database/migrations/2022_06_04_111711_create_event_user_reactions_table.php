<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventUserReactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_user_reactions', function (Blueprint $table) {
            $table->unsignedBigInteger('event_id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('event_id')->references('id')->on('events')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->nullable();
            $table->string('content')->nullable();
            $table->integer('value')->nullable();
            $table->timestamps();
        });
        DB::unprepared('ALTER TABLE `event_user_reactions` ADD PRIMARY KEY (`event_id` , `user_id` )');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_user_reactions');
    }
}

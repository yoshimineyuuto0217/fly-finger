<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trouble', function (Blueprint $table) {
            $table->bigIncrements('trouble_id');
            $table->unsignedBigInteger('reporter_user_id');
            $table->unsignedBigInteger('troublePost_id')->nullable();
            $table->unsignedBigInteger('reported_user_id')->nullable();
            $table->foreign('reporter_user_id')->references('user_id')->on('user');
            $table->foreign('troublePost_id')->references('post_id')->on('post');
            $table->foreign('reported_user_id')->references('user_id')->on('user');
            $table->string('report_text');
            $table->json('report_imageUrl')->nullable();
            $table->timestamp('create_at')->useCurrent();
            $table->unsignedBigInteger('create_by');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trouble');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Userテーブルを作るもの
     */
    public function up(): void
    {
        Schema::create('user', function (Blueprint $table) {
            // bigIncrementsは自動でPKをつけてくれる
            $table->bigIncrements('user_id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('profile_img')->nullable();
            $table->string('profile_text')->nullable();
            $table->unsignedBigInteger('create_by');
            // ->useCurrent();は作成時間を勝手に入れてくれるもの
            $table->timestamp('create_at')->useCurrent();
            // ->useCurrentOnUpdate();は更新時間を勝手に入れてくれるもの
            $table->timestamp('update_at')->useCurrent()->useCurrentOnUpdate();
            // unsignedBigIntegerはintegerよりでかい数字入れれるだけ
            $table->unsignedBigInteger('update_by');
            $table->rememberToken();
            // ログインする時に使うフラグ
            $table->boolean('is_active')->default(1);
        });
    }

    /**
     * Userテーブルを削除するもの
     */
    public function down(): void
    {

        Schema::dropIfExists('user');
    }
};

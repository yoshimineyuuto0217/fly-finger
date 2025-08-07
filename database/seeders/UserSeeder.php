<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 例①：DBファサードで直接INSERT
        DB::table('user')->insert([
            [
                'name'       => 'Alice',
                'email'      => 'alice@example.com',
                'password'   => Hash::make('password123'),
                'profile_img' => null,
                'createBy'   => 1,
                'updateBy'   => 1,
                'createAt'   => now(),
                'updateAt'   => now(),
            ],
            [
                'name'       => 'Bob',
                'email'      => 'bob@example.com',
                'password'   => Hash::make('secret456'),
                'profile_img' => null,
                'createBy'   => 1,
                'updateBy'   => 1,
                'createAt'   => now(),
                'updateAt'   => now(),
            ],
        ]);

        // 例②：Eloquentモデル + ファクトリーを使う場合
        // App\Models\User::factory()->count(5)->create();
    }
}

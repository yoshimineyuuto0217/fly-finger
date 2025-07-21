<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// ← ここでインポート
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    // テーブル名が 'users' なら不要。Singularなら 'user' を指定
    protected $table = 'user';

    /** 主キーを user_id にする */
    protected $primaryKey = 'user_id';

    /** AUTO_INCREMENT がついていることを明示 */
    public $incrementing = true;

    /** 主キーの型 */
    protected $keyType = 'int';

    /** タイムスタンプのカラム名をマイグレーションに合わせる */
    public const CREATED_AT = 'create_at';
    public const UPDATED_AT = 'update_at';

    // まとめて受け取るもの
    protected $fillable = [
        'name', 'email', 'password',
        'profile_img', 'create_by', 'update_by',
    ];

    // 送信時に隠したいもの
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'password' => 'hashed',
        'email_verified_at' => 'datetime',
    ];
}

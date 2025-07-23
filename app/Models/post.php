<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // テーブル名が posts でないので指定する
    protected $table = 'post';

    // 主キー名が id でないので指定する
    protected $primaryKey = 'post_id';

    // タイムスタンプカラムがない（created_at/updated_at）ので false にする 自分でcreateと描いたときはfalseを書かないといけない
    public $timestamps = false;

    // fillable: 一括代入可能なカラムを明示する
    protected $fillable = [
        'user_id',
        'postTag_id',
        'title',
        'content',
        'image_url',
        'create_at',
        'create_by',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostTag extends Model
{
    protected $table = 'post_tag'; // テーブル名

    protected $primaryKey = 'postTag_id'; // 主キーが postTag_id

    public $timestamps = false; // created_at / updated_at を使わない

    protected $fillable = [
        'tag_id',
        'post_id',
        'create_by',
        'create_at',
    ];

    // リレーション：PostTag は 1つのTag に属する
    public function tag()
    {
        return $this->belongsTo(Tag::class, 'tag_id', 'tag_id');
    }

    // リレーション：PostTag は 1人のユーザーに属する
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trouble extends Model
{
    // protectedはアクセス修飾子でインスタンス化して使えない 同じクラスないでは使える
    protected $table = 'trouble';
    protected $primaryKey = 'trouble_id';
    public $timestamps = false;

    protected $fillable = [
        'reporter_user_id',
        'troublePost_id',
        'reported_user_id',
        'report_text',
        'report_imageUrl',
        'create_by',
    ];

    // 関連するユーザー（通報者）
    public function reporter()
    {
        return $this->belongsTo(User::class, 'reporter_user_id', 'user_id');
    }

    // 関連するユーザー（通報された側）
    public function reported()
    {
        return $this->belongsTo(User::class, 'reported_user_id', 'user_id');
    }

    // 通報された投稿
    public function post()
    {
        return $this->belongsTo(Post::class, 'troublePost_id', 'post_id');
    }
}

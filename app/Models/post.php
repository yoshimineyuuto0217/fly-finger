<?php

// app/Models/Post.php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table      = 'post';
    protected $primaryKey = 'post_id';
    public $timestamps    = false;
    protected $fillable   = ['user_id','title','content','image_url','create_at','create_by'];

    // 多対多のリレーション定義
    public function tags()
    {
        return $this->belongsToMany(
            Tag::class,
            'post_tag',
            'post_id',
            'tag_id'
        )
        ->using(PostTag::class)
        ->withPivot(['create_by','created_at']);
    }
    public function user() {
        return $this->belongsTo(User::class,'create_by');
    }
}

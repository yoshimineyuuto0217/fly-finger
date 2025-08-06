<?php

// app/Models/Tag.php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table      = 'tag';
    protected $primaryKey = 'tag_id';
    public $timestamps    = false;
    protected $fillable   = ['tagname','create_at','create_by'];

    // 多対多のリレーション（PostTag Pivot モデルを使う例）
    public function posts()
    {
        return $this->belongsToMany(
            Post::class,       // 関連モデル
            'post_tag',        // ピボットテーブル名
            'tag_id',          // このモデル側の FK
            'post_id'          // 対象モデル側の FK
        )
        ->using(PostTag::class)               // カスタム Pivot モデルを指定
        ->withPivot(['create_by','created_at']); // 必要なピボットカラム
    }
}

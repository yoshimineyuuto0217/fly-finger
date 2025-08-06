<?php

// app/Models/PostTag.php  ※Pivotモデル
namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class PostTag extends Pivot
{
    protected $table      = 'post_tag';
    public    $incrementing = false;
    public    $timestamps   = false;

    protected $fillable   = [
        'post_id',
        'tag_id',
        'create_by',
        'created_at',
    ];
}

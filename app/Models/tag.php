<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class tag extends Model
{
    protected $table = 'tag';

    protected $primaryKey = 'tag_id';

    public $timestamps = false;

    protected $fillable = [
        'tag_id',
        'tagname',
        'create_at',
        'create_by',
    ];
}

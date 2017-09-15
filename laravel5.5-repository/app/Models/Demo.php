<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Demo extends BaseModel
{
    // use SoftDeletes;

    protected $table = 'demos';

    protected $guarded = ['id'];

    /**
     * 匹配标题搜索
     *
     * @param $query
     * @param $name
     *
     * @return mixed
     */
    public function scopeOfName($query, $name)
    {
        return $name ? $query->where('name', 'like', "%{$name}%") : $query;
    }
}

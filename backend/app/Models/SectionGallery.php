<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SectionGallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_key',
        'title',
        'image_path',
        'order_no',
        'status',
    ];
}

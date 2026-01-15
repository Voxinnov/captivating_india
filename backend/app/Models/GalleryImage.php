<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GalleryImage extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'gallery_category_id',
        'image_path',
        'alt_text',
        'order',
    ];

    public function category()
    {
        return $this->belongsTo(GalleryCategory::class);
    }
}


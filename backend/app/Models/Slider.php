<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'mobile_image',
        'caption',
        'order',
    ];

    protected $appends = ['image_url', 'mobile_image_url'];

    public function getImageUrlAttribute()
    {
        if (!$this->image) {
            return null;
        }

        if (str_starts_with($this->image, 'images/')) {
            return '/' . $this->image;
        }

        return asset('storage/' . $this->image);
    }

    public function getMobileImageUrlAttribute()
    {
        if (!$this->mobile_image) {
            return null;
        }

        if (str_starts_with($this->mobile_image, 'images/')) {
            return '/' . $this->mobile_image;
        }

        return asset('storage/' . $this->mobile_image);
    }
}

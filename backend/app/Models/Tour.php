<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tour extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'region',
        'description',
        'image',
        'map_image',
        'overview',
        'itinerary_type',
        'itinerary_pdf',
        'itinerary',
        'highlights',
        'more_info',
        'is_featured',
        'order',
    ];

    protected function casts(): array
    {
        return [
            'itinerary' => 'array',
            'highlights' => 'array',
            'is_featured' => 'boolean',
        ];
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}


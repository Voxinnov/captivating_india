<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Activity extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'destination_id',
        'place_id',
        'description',
        'long_description',
        'image',
        'is_featured',
        'order',
    ];

    public function place()
    {
        return $this->belongsTo(Place::class);
    }

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }

    protected function casts(): array
    {
        return [
            'is_featured' => 'boolean',
        ];
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

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
}


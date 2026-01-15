<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HomePage extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'home_page';

    protected $fillable = [
        'hero_title',
        'hero_subtitle',
        'hero_image',
        'about_section_content',
        'about_section_image',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}


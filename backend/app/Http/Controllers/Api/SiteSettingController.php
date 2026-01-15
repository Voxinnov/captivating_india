<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;

class SiteSettingController extends Controller
{
    public function index()
    {
        $settings = SiteSetting::all()->pluck('value', 'key');
        
        // Convert image paths to full URLs
        $settings->transform(function ($value, $key) {
            if (str_contains($key, 'logo') || str_contains($key, 'image') || str_contains($key, 'icon')) {
                return $value ? asset('storage/' . $value) : null;
            }
            return $value;
        });

        return response()->json(['data' => $settings]);
    }
}


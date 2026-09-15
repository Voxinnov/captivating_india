<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SectionGallery;
use Illuminate\Http\Request;

class AboutGalleryController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key', 'about-gallery');
        
        $images = SectionGallery::where('section_key', $key)
            ->where('status', 'publish')
            ->orderBy('order_no')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'image' => asset('storage/' . $item->image_path),
                    'order' => $item->order_no,
                ];
            });

        return response()->json($images);
    }
}

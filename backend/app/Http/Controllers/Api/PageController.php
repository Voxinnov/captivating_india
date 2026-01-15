<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $pages = Page::where('is_published', true)
            ->orderBy('order')
            ->get(['id', 'title', 'slug', 'content', 'meta_title', 'meta_description']);

        return response()->json(['data' => $pages]);
    }

    public function show($slug)
    {
        $page = Page::where('slug', $slug)
            ->where('is_published', true)
            ->first();

        if (!$page) {
            return response()->json(['message' => 'Page not found'], 404);
        }

        return response()->json([
            'data' => [
                'id' => $page->id,
                'title' => $page->title,
                'slug' => $page->slug,
                'content' => $page->content,
                'meta_title' => $page->meta_title,
                'meta_description' => $page->meta_description,
            ]
        ]);
    }
}


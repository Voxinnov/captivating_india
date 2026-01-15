<?php

use App\Http\Controllers\Api\HomePageController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\TourController;
use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\SiteSettingController;
use Illuminate\Support\Facades\Route;

// Public API Routes (No Authentication Required)
Route::prefix('v1')->group(function () {
    // Home Page
    Route::get('/home-page', [HomePageController::class, 'index']);

    // Pages
    Route::get('/pages', [PageController::class, 'index']);
    Route::get('/pages/{slug}', [PageController::class, 'show']);

    // Testimonials
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::get('/testimonials/featured', [TestimonialController::class, 'featured']);

    // Destinations
    Route::get('/destinations', [DestinationController::class, 'index']);
    Route::get('/destinations/{slug}', [DestinationController::class, 'show']);

    // Tours
    Route::get('/tours', [TourController::class, 'index']);
    Route::get('/tours/{slug}', [TourController::class, 'show']);

    // Hotels
    Route::get('/hotels', [HotelController::class, 'index']);
    Route::get('/hotels/{slug}', [HotelController::class, 'show']);

    // Activities
    Route::get('/activities', [ActivityController::class, 'index']);
    Route::get('/activities/{slug}', [ActivityController::class, 'show']);

    // Gallery
    Route::get('/gallery', [GalleryController::class, 'index']);
    Route::get('/gallery/{slug}', [GalleryController::class, 'show']);

    // Site Settings
    Route::get('/settings', [SiteSettingController::class, 'index']);
});

// Protected API Routes (Token Authentication Required)
Route::middleware('auth:sanctum')->prefix('v1/admin')->group(function () {
    // Add protected routes here if needed for POST/PUT/DELETE operations
    // Example: Route::post('/tours', [TourController::class, 'store']);
});


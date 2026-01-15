<?php

use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\HomePageController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\DestinationController;
use App\Http\Controllers\Admin\TourController;
use App\Http\Controllers\Admin\HotelController;
use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\SiteSettingController;
use Illuminate\Support\Facades\Route;

// Admin Authentication Routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AdminAuthController::class, 'login']);
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');

    // Protected Admin Routes
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Home Page
        Route::get('/home-page', [HomePageController::class, 'edit'])->name('home-page.edit');
        Route::put('/home-page', [HomePageController::class, 'update'])->name('home-page.update');

        // Pages
        Route::resource('pages', PageController::class);

        // Testimonials
        Route::resource('testimonials', TestimonialController::class);

        // Destinations
        Route::resource('destinations', DestinationController::class);

        // Tours
        Route::resource('tours', TourController::class);

        // Hotels
        Route::resource('hotels', HotelController::class);

        // Activities
        Route::resource('activities', ActivityController::class);

        // Gallery
        Route::resource('gallery', GalleryController::class);
        Route::delete('/gallery/images/{image}', [GalleryController::class, 'deleteImage'])->name('gallery.images.destroy');

        // Site Settings
        Route::get('/settings', [SiteSettingController::class, 'index'])->name('settings.index');
        Route::put('/settings', [SiteSettingController::class, 'update'])->name('settings.update');
    });
});

// Redirect root to admin login
Route::get('/', function () {
    return redirect()->route('admin.login');
});


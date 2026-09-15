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
use App\Http\Controllers\Admin\PaymentDetailController;
use App\Http\Controllers\Admin\AboutSectionController;
use App\Http\Controllers\Admin\BackgroundImageController;
use App\Http\Controllers\Admin\PlaceController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\VirtualTourController;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Admin\AboutGalleryController;
use Illuminate\Support\Facades\Route;

// Fallback login route (redirects to admin login)
Route::get('/login', function () {
    return redirect()->route('admin.login');
})->name('login');

Route::get('/admin', function () {
    return redirect()->route('admin.dashboard'); // or admin.login if auth middleware handles dashboard redirect
});

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

        // New Management Modules
        Route::resource('payment-details', PaymentDetailController::class);
        Route::resource('about-sections', AboutSectionController::class);
        Route::resource('background-images', BackgroundImageController::class);
        Route::resource('places', PlaceController::class);
        Route::resource('sliders', SliderController::class);
        Route::resource('virtual-tours', VirtualTourController::class);
        Route::resource('contact-messages', ContactMessageController::class);

        // About Galleries
        Route::get('/about-galleries/{key}', [AboutGalleryController::class, 'index'])->name('about-galleries.index');
        Route::get('/about-galleries/{key}/create', [AboutGalleryController::class, 'create'])->name('about-galleries.create');
        Route::post('/about-galleries/{key}', [AboutGalleryController::class, 'store'])->name('about-galleries.store');
        Route::resource('about-galleries', AboutGalleryController::class)->except(['index', 'create', 'store']);

        // Pages
        Route::resource('pages', PageController::class);

        // Testimonials
        Route::resource('testimonials', TestimonialController::class);

        // Destinations
        Route::resource('destinations', DestinationController::class);

        // Tours
        Route::delete('/tours/images/{image}', [TourController::class, 'deleteImage'])->name('tours.images.destroy');
        Route::resource('tours', TourController::class);

        // Hotels
        Route::delete('/hotels/images/{image}', [HotelController::class, 'deleteImage'])->name('hotels.images.destroy');
        Route::resource('hotels', HotelController::class);

        // Activities
        Route::resource('activities', ActivityController::class);

        // Gallery
        Route::get('/gallery/images', [GalleryController::class, 'showImages'])->name('gallery.images');
        Route::post('/gallery/images', [GalleryController::class, 'storeImage'])->name('gallery.images.store');
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


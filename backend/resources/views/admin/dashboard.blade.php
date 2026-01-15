@extends('layouts.admin')

@section('title', 'Dashboard')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-sm">Tours</p>
                    <p class="text-3xl font-bold mt-2">{{ $stats['tours'] }}</p>
                </div>
                <i class="fas fa-route text-4xl text-blue-500"></i>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-sm">Hotels</p>
                    <p class="text-3xl font-bold mt-2">{{ $stats['hotels'] }}</p>
                </div>
                <i class="fas fa-hotel text-4xl text-green-500"></i>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-sm">Activities</p>
                    <p class="text-3xl font-bold mt-2">{{ $stats['activities'] }}</p>
                </div>
                <i class="fas fa-hiking text-4xl text-purple-500"></i>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-sm">Testimonials</p>
                    <p class="text-3xl font-bold mt-2">{{ $stats['testimonials'] }}</p>
                </div>
                <i class="fas fa-quote-left text-4xl text-yellow-500"></i>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-sm">Destinations</p>
                    <p class="text-3xl font-bold mt-2">{{ $stats['destinations'] }}</p>
                </div>
                <i class="fas fa-map-marker-alt text-4xl text-red-500"></i>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-sm">Pages</p>
                    <p class="text-3xl font-bold mt-2">{{ $stats['pages'] }}</p>
                </div>
                <i class="fas fa-file-alt text-4xl text-indigo-500"></i>
            </div>
        </div>
    </div>

    <div class="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-bold mb-4">Quick Links</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="{{ route('admin.tours.create') }}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center">Add Tour</a>
            <a href="{{ route('admin.hotels.create') }}" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-center">Add Hotel</a>
            <a href="{{ route('admin.activities.create') }}" class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-center">Add Activity</a>
            <a href="{{ route('admin.testimonials.create') }}" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-center">Add Testimonial</a>
        </div>
    </div>
</div>
@endsection


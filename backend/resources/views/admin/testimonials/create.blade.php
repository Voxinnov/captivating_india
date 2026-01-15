@extends('layouts.admin')

@section('title', 'Create Testimonial')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Create Testimonial</h1>
    <form action="{{ route('admin.testimonials.store') }}" method="POST" class="bg-white p-6 rounded-lg shadow">
        @csrf
        <div class="mb-4"><label class="block font-bold mb-2">Name *</label><input type="text" name="name" value="{{ old('name') }}" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Location</label><input type="text" name="location" value="{{ old('location') }}" class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Text *</label><textarea name="text" rows="4" required class="w-full px-3 py-2 border rounded">{{ old('text') }}</textarea></div>
        <div class="mb-4"><label class="block font-bold mb-2">Trip</label><input type="text" name="trip" value="{{ old('trip') }}" class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Rating</label><input type="number" name="rating" value="{{ old('rating', 5) }}" min="1" max="5" class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="flex items-center"><input type="checkbox" name="is_featured" value="1" {{ old('is_featured') ? 'checked' : '' }} class="mr-2"><span>Featured</span></label></div>
        <div class="flex gap-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Create</button>
            <a href="{{ route('admin.testimonials.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded">Cancel</a>
        </div>
    </form>
</div>
@endsection


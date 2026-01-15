@extends('layouts.admin')

@section('title', 'Edit Tour')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Edit Tour</h1>
    <form action="{{ route('admin.tours.update', $tour) }}" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow">
        @csrf @method('PUT')
        <div class="mb-4"><label class="block font-bold mb-2">Title *</label><input type="text" name="title" value="{{ old('title', $tour->title) }}" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Slug *</label><input type="text" name="slug" value="{{ old('slug', $tour->slug) }}" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Region *</label><input type="text" name="region" value="{{ old('region', $tour->region) }}" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Description *</label><textarea name="description" rows="3" required class="w-full px-3 py-2 border rounded">{{ old('description', $tour->description) }}</textarea></div>
        <div class="mb-4"><label class="block font-bold mb-2">Image</label>@if($tour->image)<img src="{{ asset('storage/' . $tour->image) }}" class="mb-2 h-32">@endif<input type="file" name="image" accept="image/*" class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Overview</label><textarea name="overview" rows="5" class="w-full px-3 py-2 border rounded">{{ old('overview', $tour->overview) }}</textarea></div>
        <div class="mb-4"><label class="block font-bold mb-2">Itinerary (JSON array)</label><textarea name="itinerary" rows="10" class="w-full px-3 py-2 border rounded font-mono text-sm">{{ json_encode(old('itinerary', $tour->itinerary), JSON_PRETTY_PRINT) }}</textarea></div>
        <div class="mb-4"><label class="block font-bold mb-2">Highlights (JSON array)</label><textarea name="highlights" rows="5" class="w-full px-3 py-2 border rounded font-mono text-sm">{{ json_encode(old('highlights', $tour->highlights), JSON_PRETTY_PRINT) }}</textarea></div>
        <div class="mb-4"><label class="flex items-center"><input type="checkbox" name="is_featured" value="1" {{ old('is_featured', $tour->is_featured) ? 'checked' : '' }} class="mr-2"><span>Featured</span></label></div>
        <div class="flex gap-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Update</button>
            <a href="{{ route('admin.tours.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded">Cancel</a>
        </div>
    </form>
</div>
@endsection


@extends('layouts.admin')

@section('title', 'Create Tour')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Create Tour</h1>
    <form action="{{ route('admin.tours.store') }}" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow">
        @csrf
        <div class="mb-4"><label class="block font-bold mb-2">Title *</label><input type="text" name="title" value="{{ old('title') }}" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Slug</label><input type="text" name="slug" value="{{ old('slug') }}" class="w-full px-3 py-2 border rounded"><p class="text-sm text-gray-500 mt-1">Auto-generated if empty</p></div>
        <div class="mb-4"><label class="block font-bold mb-2">Region *</label><input type="text" name="region" value="{{ old('region') }}" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Description *</label><textarea name="description" rows="3" required class="w-full px-3 py-2 border rounded">{{ old('description') }}</textarea></div>
        <div class="mb-4"><label class="block font-bold mb-2">Image *</label><input type="file" name="image" accept="image/*" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Overview</label><textarea name="overview" rows="5" class="w-full px-3 py-2 border rounded">{{ old('overview') }}</textarea></div>
        <div class="mb-4"><label class="block font-bold mb-2">Itinerary (one per line)</label><textarea name="itinerary[]" rows="10" class="w-full px-3 py-2 border rounded" placeholder="Day 1 – Bangalore: Arrive..."></textarea></div>
        <div class="mb-4"><label class="block font-bold mb-2">Highlights (one per line)</label><textarea name="highlights[]" rows="5" class="w-full px-3 py-2 border rounded" placeholder="Interact with master weavers..."></textarea></div>
        <div class="mb-4"><label class="flex items-center"><input type="checkbox" name="is_featured" value="1" {{ old('is_featured') ? 'checked' : '' }} class="mr-2"><span>Featured</span></label></div>
        <div class="flex gap-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Create</button>
            <a href="{{ route('admin.tours.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded">Cancel</a>
        </div>
    </form>
</div>
@endsection


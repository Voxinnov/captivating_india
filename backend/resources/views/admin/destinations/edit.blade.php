@extends('layouts.admin')

@section('title', 'Edit Destination')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Destinations</h2>
        <a href="{{ route('admin.destinations.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-arrow-left mr-2"></i> Back
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="p-6 border-b border-gray-200 bg-gray-50">
            <h3 class="text-lg font-semibold text-gray-700">Edit Destination: {{ $destination->title }}</h3>
        </div>
        
        <form action="{{ route('admin.destinations.update', $destination->id) }}" method="POST" enctype="multipart/form-data" class="p-6">
            @csrf
            @method('PUT')

            <!-- Title -->
            <div class="mb-6">
                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" name="title" id="title" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required value="{{ old('title', $destination->title) }}">
                @error('title') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Slug -->
            <div class="mb-6">
                <label for="slug" class="block text-gray-700 text-sm font-bold mb-2">Slug</label>
                <input type="text" name="slug" id="slug" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required value="{{ old('slug', $destination->slug) }}">
                @error('slug') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Short Description -->
            <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Short Description</label>
                <textarea name="description" id="description" rows="3" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>{{ old('description', $destination->description) }}</textarea>
                @error('description') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Long Description -->
            <div class="mb-6">
                <label for="long_description" class="block text-gray-700 text-sm font-bold mb-2">Long Description</label>
                <textarea name="long_description" id="long_description" class="summernote">{{ old('long_description', $destination->long_description) }}</textarea>
            </div>

            <!-- Highlights -->
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">Highlights</label>
                <div id="highlights-container" class="space-y-2">
                    @php
                        $highlights = old('highlights', $destination->highlights ?? []);
                    @endphp
                    @forelse($highlights as $highlight)
                        <div class="flex gap-2">
                            <input type="text" name="highlights[]" value="{{ $highlight }}" class="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 rounded"><i class="fas fa-trash"></i></button>
                        </div>
                    @empty
                        <div class="flex gap-2">
                            <input type="text" name="highlights[]" class="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 rounded"><i class="fas fa-trash"></i></button>
                        </div>
                    @endforelse
                </div>
                <button type="button" onclick="addHighlight()" class="mt-2 text-sm bg-green-500 text-white px-4 py-1 rounded">Add Highlight</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <!-- Image -->
                <div>
                    <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Featured Image</label>
                    @if($destination->image)
                        <div class="mb-2">
                            <img src="{{ $destination->image_url }}" alt="Current Image" class="h-20 w-auto rounded border">
                        </div>
                    @endif
                    <input type="file" name="image" id="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                    @error('image') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
                </div>

                <!-- Order -->
                <div>
                    <label for="order" class="block text-gray-700 text-sm font-bold mb-2">Order</label>
                    <input type="number" name="order" id="order" value="{{ old('order', $destination->order) }}" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    @error('order') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
                </div>
            </div>

            <!-- Featured Checkbox -->
            <div class="mb-6">
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" name="is_featured" value="1" {{ old('is_featured', $destination->is_featured) ? 'checked' : '' }} class="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-4 w-4">
                    <span class="ml-2 text-sm font-bold text-gray-700">Featured Destination</span>
                </label>
            </div>

            <!-- Gallery Images -->
            <div class="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <label class="block text-gray-700 text-sm font-bold mb-3">Gallery Images</label>

                @if($destination->images && $destination->images->count() > 0)
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        @foreach($destination->images as $img)
                            <div class="relative group border rounded bg-white p-2">
                                <img src="{{ str_starts_with($img->image_path, 'images/') ? asset($img->image_path) : asset('storage/' . $img->image_path) }}"
                                     alt="Gallery image"
                                     class="h-24 w-full object-cover rounded">
                                <div class="mt-2 text-right">
                                    <button type="button"
                                            onclick="if(confirm('Delete this gallery image?')) { document.getElementById('delete-destination-img-{{ $img->id }}').submit(); }"
                                            class="bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1 rounded transition">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <p class="text-gray-500 italic text-sm mb-4">No gallery images uploaded yet.</p>
                @endif

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Upload New Gallery Images</label>
                    <div class="border border-gray-300 rounded-md p-2 bg-white">
                        <input type="file" name="images[]" id="images" multiple accept="image/*"
                               class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                    </div>
                    <p class="text-xs text-gray-500 mt-1">You can select multiple images at once (JPEG, PNG, JPG, WebP, max 2MB each).</p>
                    @error('images.*') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
                </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end mt-8 border-t pt-6">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition duration-200 w-full md:w-auto">
                    Update
                </button>
            </div>
        </form>
    </div>
</div>

{{-- Hidden delete forms for gallery images (must be outside the main form) --}}
@if($destination->images && $destination->images->count() > 0)
    @foreach($destination->images as $img)
        <form id="delete-destination-img-{{ $img->id }}" action="{{ route('admin.destinations.images.destroy', $img->id) }}" method="POST" class="hidden">
            @csrf
            @method('DELETE')
        </form>
    @endforeach
@endif

<script>
    function addHighlight() {
        const container = document.getElementById('highlights-container');
        const div = document.createElement('div');
        div.className = 'flex gap-2';
        div.innerHTML = `
            <input type="text" name="highlights[]" class="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 rounded"><i class="fas fa-trash"></i></button>
        `;
        container.appendChild(div);
    }

    $(document).ready(function() {
        $('.summernote').summernote({
            height: 300,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ]
        });
    });
</script>
@endsection

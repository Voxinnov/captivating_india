@extends('layouts.admin')

@section('title', 'Add Hotel')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Hotels</h2>
        <a href="{{ route('admin.hotels.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-arrow-left mr-2"></i> Back
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="p-6 border-b border-gray-200 bg-gray-50">
            <h3 class="text-lg font-semibold text-gray-700">Add New Hotel</h3>
        </div>
        
        <form action="{{ route('admin.hotels.store') }}" method="POST" enctype="multipart/form-data" class="p-6">
            @csrf

            <!-- Title -->
            <div class="mb-6">
                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" name="title" id="title" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required value="{{ old('title') }}">
                @error('title') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Place -->
            <div class="mb-6 w-1/4">
                <label for="place_id" class="block text-gray-700 text-sm font-bold mb-2">Place</label>
                <select name="place_id" id="place_id" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">select</option>
                    @foreach($places as $place)
                        <option value="{{ $place->id }}" {{ old('place_id') == $place->id ? 'selected' : '' }}>{{ $place->title }}</option>
                    @endforeach
                </select>
                @error('place_id') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Description -->
            <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea name="description" id="description" class="summernote">{{ old('description') }}</textarea>
                @error('description') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Flag -->
            <div class="mb-6">
                <label for="flag" class="block text-gray-700 text-sm font-bold mb-2">Flag</label>
                <input type="text" name="flag" id="flag" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value="{{ old('flag') }}">
            </div>

            <!-- Map -->
            <div class="mb-6">
                <label for="map" class="block text-gray-700 text-sm font-bold mb-2">Map</label>
                <input type="text" name="map" id="map" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value="{{ old('map') }}">
            </div>

            <!-- Images -->
            <div class="mb-6">
                <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Images</label>
                <p class="text-xs text-gray-500 mb-1">Size (1200 x 640)</p>
                <div class="border border-gray-300 rounded-md p-2 bg-gray-50">
                    <input type="file" name="image" id="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                    <p class="text-xs text-gray-500 mt-1 pl-1">Browse... No files selected.</p>
                </div>
                @error('image') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Gallery Images -->
            <div class="mb-6">
                <label for="images" class="block text-gray-700 text-sm font-bold mb-2">Gallery Images</label>
                <div class="border border-gray-300 rounded-md p-2 bg-gray-50">
                    <input type="file" name="images[]" id="images" multiple class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end mt-8 border-t pt-6">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition duration-200 w-full md:w-auto">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>

<script>
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

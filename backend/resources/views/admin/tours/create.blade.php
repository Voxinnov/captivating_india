@extends('layouts.admin')

@section('title', 'Add New Tour')

@section('content')
<div class="max-w-4xl mx-auto">
    <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Add New Tour</h1>
        <a href="{{ route('admin.tours.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
            <i class="fas fa-arrow-left mr-2"></i>Back to Tours
        </a>
    </div>

    <form action="{{ route('admin.tours.store') }}" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow space-y-6">
        @csrf

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label class="block font-bold mb-2">Title *</label>
                <input type="text" name="title" value="{{ old('title') }}" required class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                @error('title') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>
            <div>
                <div class="flex justify-between items-center mb-2">
                    <label class="block font-bold">Tour Category</label>
                    <a href="{{ route('admin.tour-categories.index') }}" target="_blank" class="text-xs text-blue-600 hover:underline">+ Add Category</a>
                </div>
                <select name="tour_category_id" class="w-full px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">-- Select Category --</option>
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}" {{ old('tour_category_id') == $category->id ? 'selected' : '' }}>
                            {{ $category->title }}
                        </option>
                    @endforeach
                </select>
                @error('tour_category_id') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>
            <div>
                <label class="block font-bold mb-2">Region (e.g. Southern India)</label>
                <input type="text" name="region" value="{{ old('region') }}" placeholder="e.g. Southern India" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                @error('region') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>
        </div>

        <div>
            <label class="block font-bold mb-2">Overview</label>
            <textarea id="overview" name="overview" rows="5" class="w-full px-3 py-2 border rounded">{{ old('overview') }}</textarea>
            @error('overview') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
        </div>

        <div>
            <label class="block font-bold mb-2">More Info</label>
            <textarea id="more_info" name="more_info" rows="5" class="w-full px-3 py-2 border rounded">{{ old('more_info') }}</textarea>
            @error('more_info') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
        </div>

        <div class="p-4 border rounded bg-gray-50" x-data="{ itineraryType: '{{ old('itinerary_type', 'text') }}' }">
            <label class="block font-bold mb-2 text-base">Itinerary Format</label>
            <div class="flex items-center gap-6 mb-4">
                <label class="inline-flex items-center cursor-pointer">
                    <input type="radio" name="itinerary_type" value="text" x-model="itineraryType" class="form-radio text-blue-600">
                    <span class="ml-2 font-medium">Text</span>
                </label>
                <label class="inline-flex items-center cursor-pointer">
                    <input type="radio" name="itinerary_type" value="pdf" x-model="itineraryType" class="form-radio text-blue-600">
                    <span class="ml-2 font-medium">PDF File</span>
                </label>
            </div>

            <div x-show="itineraryType === 'text'">
                <label class="block font-bold mb-2 text-sm text-gray-700">Itinerary (one per line)</label>
                <textarea name="itinerary" rows="5" class="w-full px-3 py-2 border rounded" placeholder="Day 1 – Bangalore: Arrive..."></textarea>
            </div>

            <div x-show="itineraryType === 'pdf'" style="display: none;">
                <label class="block font-bold mb-2 text-sm text-gray-700">Upload Itinerary PDF File</label>
                <input type="file" name="itinerary_pdf" accept="application/pdf" class="w-full px-3 py-2 border rounded bg-white">
                <p class="text-xs text-gray-500 mt-1">Upload a PDF file containing the itinerary.</p>
            </div>
        </div>

        <div>
            <label class="block font-bold mb-2">Highlights (one per line)</label>
            <textarea name="highlights" rows="5" class="w-full px-3 py-2 border rounded" placeholder="Interact with master weavers..."></textarea>
        </div>

        <div class="p-4 border rounded bg-gray-50">
            <label class="block font-bold mb-2 text-sm text-gray-700">Places Covered</label>
            <p class="text-xs text-gray-500 mb-2">Select places visited during this tour.</p>
            <select name="places[]" id="places_select" multiple class="w-full border rounded px-3 py-2">
                @if(isset($places))
                    @php $grouped = $places->groupBy(fn($p) => $p->destination->title ?? 'Other') @endphp
                    @foreach($grouped as $destinationName => $group)
                        <optgroup label="{{ $destinationName }}">
                            @foreach($group as $place)
                                <option value="{{ $place->id }}">{{ $place->title }}</option>
                            @endforeach
                        </optgroup>
                    @endforeach
                @endif
            </select>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label class="block font-bold mb-2">Featured Image *</label>
                <input type="file" name="image" accept="image/*" required class="w-full px-3 py-2 border rounded bg-white">
                @error('image') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>
            <div>
                <label class="block font-bold mb-2">Map Image</label>
                <input type="file" name="map_image" accept="image/*" class="w-full px-3 py-2 border rounded bg-white">
            </div>
            <div>
                <label class="block font-bold mb-2">Gallery Images</label>
                <input type="file" name="images[]" multiple class="w-full px-3 py-2 border rounded bg-white">
            </div>
        </div>

        <div>
            <label class="flex items-center">
                <input type="checkbox" name="is_featured" value="1" {{ old('is_featured') ? 'checked' : '' }} class="mr-2">
                <span class="font-medium">Featured on Home</span>
            </label>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t">
            <a href="{{ route('admin.tours.index') }}" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded transition">
                Cancel
            </a>
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition">
                Submit Tour
            </button>
        </div>
    </form>
</div>

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<style>
    .select2-container { width: 100% !important; }
    .select2-container--default .select2-selection--multiple {
        border-color: #d1d5db;
        border-radius: 0.375rem;
        padding: 4px 6px;
        min-height: 42px;
    }
    .select2-container--default .select2-selection--multiple .select2-selection__choice {
        background-color: #3b82f6;
        border: none;
        color: #fff;
        border-radius: 4px;
        padding: 2px 8px;
    }
</style>

<script>
    $(document).ready(function() {
        $('#overview, #more_info').summernote({
            height: 150,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview']]
            ]
        });

        $('#places_select').select2({
            placeholder: 'Search and select places...',
            allowClear: true,
            closeOnSelect: false,
            width: '100%'
        });
    });
</script>
@endsection

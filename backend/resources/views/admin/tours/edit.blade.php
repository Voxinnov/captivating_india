@extends('layouts.admin')

@section('title', 'Edit Tour')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Edit Tour</h1>
    <form action="{{ route('admin.tours.update', $tour) }}" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow">
        @csrf @method('PUT')
        <div class="mb-4"><label class="block font-bold mb-2">Title *</label><input type="text" name="title" value="{{ old('title', $tour->title) }}" required class="w-full px-3 py-2 border rounded"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
                <label class="block font-bold mb-2">Slug *</label>
                <input type="text" name="slug" value="{{ old('slug', $tour->slug) }}" required class="w-full px-3 py-2 border rounded">
            </div>
            <div>
                <div class="flex justify-between items-center mb-2">
                    <label class="block font-bold">Tour Category</label>
                    <a href="{{ route('admin.tour-categories.index') }}" target="_blank" class="text-xs text-blue-600 hover:underline">+ Add Category</a>
                </div>
                <select name="tour_category_id" class="w-full px-3 py-2 border rounded bg-white">
                    <option value="">-- Select Category --</option>
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}" {{ old('tour_category_id', $tour->tour_category_id) == $category->id ? 'selected' : '' }}>
                            {{ $category->title }}
                        </option>
                    @endforeach
                </select>
            </div>
            <div>
                <label class="block font-bold mb-2">Region (e.g. Tamil Nadu, Karnataka & Kerala)</label>
                <input type="text" name="region" value="{{ old('region', $tour->region) }}" placeholder="e.g. Southern India" class="w-full px-3 py-2 border rounded">
            </div>
        </div>

        <div class="mb-4"><label class="block font-bold mb-2">Image</label>@if($tour->image)<img src="{{ str_starts_with($tour->image, 'images/') ? asset($tour->image) : asset('storage/' . $tour->image) }}" class="mb-2 h-32">@endif<input type="file" name="image" accept="image/*" class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Map Image</label>@if($tour->map_image)<img src="{{ str_starts_with($tour->map_image, 'images/') ? asset($tour->map_image) : asset('storage/' . $tour->map_image) }}" class="mb-2 h-32">@endif<input type="file" name="map_image" accept="image/*" class="w-full px-3 py-2 border rounded"></div>

        {{-- Places multi-select --}}
        <div class="mb-6 p-4 border rounded bg-gray-50">
            <label class="block font-bold mb-2 text-base">Places Covered</label>
            <p class="text-sm text-gray-500 mb-3">Select all places visited during this tour. These will be shown on the tour detail page.</p>
            <select name="places[]" id="places-select" multiple class="w-full border rounded px-3 py-2">
                @php $grouped = $places->groupBy(fn($p) => $p->destination->title ?? 'Other') @endphp
                @foreach($grouped as $destinationName => $group)
                    <optgroup label="{{ $destinationName }}">
                        @foreach($group as $place)
                            <option value="{{ $place->id }}"
                                {{ in_array($place->id, $selectedPlaceIds ?? []) ? 'selected' : '' }}>
                                {{ $place->title }}
                            </option>
                        @endforeach
                    </optgroup>
                @endforeach
            </select>
        </div>

        <div class="mb-6 p-4 border rounded bg-gray-50">
            <label class="block font-bold mb-3 text-lg">Tour Gallery Images</label>
            
            @if($tour->images && $tour->images->count() > 0)
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    @foreach($tour->images as $img)
                        <div class="relative group border rounded bg-white p-2">
                            <img src="{{ str_starts_with($img->image_path, 'images/') ? asset($img->image_path) : asset('storage/' . $img->image_path) }}" class="h-24 w-full object-cover">
                            <div class="mt-2 text-right">
                                <button type="button" 
                                        onclick="if(confirm('Delete this gallery image?')) { document.getElementById('delete-img-{{ $img->id }}').submit(); }" 
                                        class="bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1 rounded transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    @endforeach
                </div>
            @else
                <p class="text-gray-500 italic mb-4">No gallery images uploaded yet.</p>
            @endif

            <div>
                <label class="block font-bold mb-2 text-sm text-gray-700">Upload New Gallery Images</label>
                <input type="file" name="images[]" multiple accept="image/*" class="w-full px-3 py-2 border rounded bg-white">
            </div>
        </div>

        <div class="mb-4"><label class="block font-bold mb-2">Overview</label><textarea id="overview" name="overview" rows="5" class="w-full px-3 py-2 border rounded">{{ old('overview', $tour->overview) }}</textarea></div>
        <div class="mb-6 p-4 border rounded bg-gray-50" x-data="{ itineraryType: '{{ old('itinerary_type', $tour->itinerary_type ?? 'text') }}' }">
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
                <label class="block font-bold mb-2 text-sm text-gray-700">Itinerary (One item per line)</label>
                <textarea name="itinerary" rows="8" class="w-full px-3 py-2 border rounded font-mono text-sm">{{ old('itinerary', is_array($tour->itinerary) ? implode("\n", $tour->itinerary) : '') }}</textarea>
            </div>

            <div x-show="itineraryType === 'pdf'" style="display: none;">
                <label class="block font-bold mb-2 text-sm text-gray-700">Itinerary PDF File</label>
                @if($tour->itinerary_pdf)
                    <div class="mb-3 p-3 bg-white border rounded flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-file-pdf text-red-500 text-xl"></i>
                            <span class="text-sm font-medium text-gray-800">Current PDF: {{ basename($tour->itinerary_pdf) }}</span>
                        </div>
                        <a href="{{ str_starts_with($tour->itinerary_pdf, 'http') ? $tour->itinerary_pdf : asset('storage/' . $tour->itinerary_pdf) }}" target="_blank" class="text-blue-600 hover:underline text-sm font-semibold">View PDF</a>
                    </div>
                @endif
                <input type="file" name="itinerary_pdf" accept="application/pdf" class="w-full px-3 py-2 border rounded bg-white">
                <p class="text-xs text-gray-500 mt-1">Upload a PDF file to set or replace the itinerary PDF.</p>
            </div>
        </div>
        <div class="mb-4"><label class="block font-bold mb-2">Highlights (One item per line)</label><textarea name="highlights" rows="5" class="w-full px-3 py-2 border rounded font-mono text-sm">{{ old('highlights', is_array($tour->highlights) ? implode("\n", $tour->highlights) : '') }}</textarea></div>
        <div class="mb-4"><label class="flex items-center"><input type="checkbox" name="is_featured" value="1" {{ old('is_featured', $tour->is_featured) ? 'checked' : '' }} class="mr-2"><span>Featured</span></label></div>
        <div class="flex gap-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Update</button>
            <a href="{{ route('admin.tours.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded">Cancel</a>
        </div>
    </form>

    @if($tour->images && $tour->images->count() > 0)
        @foreach($tour->images as $img)
            <form id="delete-img-{{ $img->id }}" action="{{ route('admin.tours.images.destroy', $img->id) }}" method="POST" class="hidden">
                @csrf
                @method('DELETE')
            </form>
        @endforeach
    @endif
</div>

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<style>
    .select2-container { width: 100% !important; }
    .select2-container--default .select2-selection--multiple {
        border-color: #d1d5db;
        border-radius: 0.375rem;
        padding: 4px 6px;
        min-height: 44px;
    }
    .select2-container--default .select2-selection--multiple .select2-selection__choice {
        background-color: #3b82f6;
        border: none;
        color: #fff;
        border-radius: 4px;
        padding: 2px 8px;
    }
    .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
        color: #fff;
        margin-right: 4px;
    }
</style>

<script>
    $(document).ready(function() {
        $('#overview').summernote({
            placeholder: 'Type here...',
            tabsize: 2,
            height: 200,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ]
        });

        $('#places-select').select2({
            placeholder: 'Search and select places...',
            allowClear: true,
            closeOnSelect: false,
            width: '100%',
        });
    });
</script>
@endsection


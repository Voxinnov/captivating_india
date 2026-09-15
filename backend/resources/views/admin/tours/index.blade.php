@extends('layouts.admin')

@section('title', 'Tours')

@section('content')
<div x-data="{ showModal: {{ $errors->any() ? 'true' : 'false' }} }">
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Tours</h1>
        <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <i class="fas fa-plus mr-2"></i>Add New
        </button>
    </div>

    <!-- Modal Backdrop -->
    <div x-show="showModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showModal = false"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold text-gray-900" id="modal-title">New Tour</h3>
                        <button @click="showModal = false" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <form action="{{ route('admin.tours.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-4">
                            <div>
                                <label class="block font-bold mb-2">Title *</label>
                                <input type="text" name="title" value="{{ old('title') }}" required class="w-full px-3 py-2 border rounded">
                            </div>
                        </div>



                        <div class="mb-4">
                            <label class="block font-bold mb-2">Overview</label>
                            <textarea id="modal_overview" name="overview" rows="5" class="w-full px-3 py-2 border rounded">{{ old('overview') }}</textarea>
                        </div>

                        <div class="mb-4">
                            <label class="block font-bold mb-2">More Info</label>
                            <textarea id="modal_more_info" name="more_info" rows="5" class="w-full px-3 py-2 border rounded">{{ old('more_info') }}</textarea>
                        </div>

                        <div class="mb-4 p-4 border rounded bg-gray-50" x-data="{ itineraryType: '{{ old('itinerary_type', 'text') }}' }">
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

                        <div class="mb-4">
                            <label class="block font-bold mb-2">Highlights (one per line)</label>
                            <textarea name="highlights" rows="5" class="w-full px-3 py-2 border rounded" placeholder="Interact with master weavers..."></textarea>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label class="block font-bold mb-2">Featured Image *</label>
                                <input type="file" name="image" accept="image/*" required class="w-full px-3 py-2 border rounded">
                            </div>
                            <div>
                                <label class="block font-bold mb-2">Map Image</label>
                                <input type="file" name="map_image" accept="image/*" class="w-full px-3 py-2 border rounded">
                            </div>
                            <div>
                                <label class="block font-bold mb-2">Gallery Images</label>
                                <input type="file" name="images[]" multiple class="w-full px-3 py-2 border rounded">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="flex items-center"><input type="checkbox" name="is_featured" value="1" {{ old('is_featured') ? 'checked' : '' }} class="mr-2"><span>Featured on Home</span></label>
                        </div>

                        <div class="flex justify-end gap-3 mt-6">
                            <button type="button" @click="showModal = false" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded transition">
                                Cancel
                            </button>
                            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $('#modal_overview, #modal_more_info').summernote({
                height: 150,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen', 'codeview']]
                ]
            });
        });
    </script>

    <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($tours as $tour)
                    <tr>
                        <td class="px-6 py-4">{{ $tour->title }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $tour->slug }}</td>
                        <td class="px-6 py-4">
                            <a href="{{ route('admin.tours.edit', $tour) }}" class="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
                            <form action="{{ route('admin.tours.destroy', $tour) }}" method="POST" class="inline" onsubmit="return confirm('Are you sure?')">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">No tours found</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4">{{ $tours->links() }}</div>
</div>
@endsection


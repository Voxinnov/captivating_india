@extends('layouts.admin')

@section('title', 'Themes')

@section('content')
<div x-data="{ showModal: {{ $errors->any() ? 'true' : 'false' }} }">
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Themes</h1>
        <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <i class="fas fa-plus mr-2"></i>Add New
        </button>
    </div>

    <!-- Modal Backdrop -->
    <div x-show="showModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showModal = false"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold text-gray-900" id="modal-title">New Theme</h3>
                        <button @click="showModal = false" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <form action="{{ route('admin.destinations.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2">Title *</label>
                            <input type="text" name="title" value="{{ old('title') }}" required class="w-full px-3 py-2 border rounded">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2">Short Description *</label>
                            <textarea name="description" rows="3" required class="w-full px-3 py-2 border rounded">{{ old('description') }}</textarea>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2">Long Description</label>
                            <textarea name="long_description" class="summernote">{{ old('long_description') }}</textarea>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2">Highlights</label>
                            <div id="modal-highlights-container" class="space-y-2">
                                <div class="flex gap-2">
                                    <input type="text" name="highlights[]" class="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 rounded"><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                            <button type="button" onclick="addModalHighlight()" class="mt-2 text-sm bg-green-500 text-white px-4 py-1 rounded">Add Highlight</button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">Image *</label>
                                <input type="file" name="image" required class="w-full px-3 py-2 border rounded">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">Gallery Images</label>
                                <input type="file" name="images[]" multiple class="w-full px-3 py-2 border rounded">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">Order</label>
                                <input type="number" name="order" value="{{ old('order', 0) }}" class="w-full px-3 py-2 border rounded">
                            </div>
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
            $('.summernote').summernote({
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
        });

        function addModalHighlight() {
            const container = document.getElementById('modal-highlights-container');
            const div = document.createElement('div');
            div.className = 'flex gap-2';
            div.innerHTML = `
                <input type="text" name="highlights[]" class="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 rounded"><i class="fas fa-trash"></i></button>
            `;
            container.appendChild(div);
        }
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
                @forelse($destinations as $destination)
                    <tr>
                        <td class="px-6 py-4">{{ $destination->title }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ $destination->slug }}</td>
                        <td class="px-6 py-4">
                            <a href="{{ route('admin.destinations.edit', $destination) }}" class="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
                            <form action="{{ route('admin.destinations.destroy', $destination) }}" method="POST" class="inline" onsubmit="return confirm('Are you sure?')">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="3" class="px-6 py-4 text-center text-gray-500">No themes found</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4">{{ $destinations->links() }}</div>
</div>
@endsection


@extends('layouts.admin')

@section('title', 'Manage ' . $title)

@section('content')
<div x-data="{ showModal: {{ $errors->any() ? 'true' : 'false' }} }">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Manage {{ $title }}</h2>
        <button @click="showModal = true" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-plus mr-2"></i> Add New
        </button>
    </div>

    <!-- Modal Backdrop -->
    <div x-show="showModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showModal = false"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold text-gray-900" id="modal-title">Add New to {{ $title }}</h3>
                        <button @click="showModal = false" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <form action="{{ route('admin.about-galleries.store', $key) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input type="text" name="title" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Title" value="{{ old('title') }}">
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Photo</label>
                            <input type="file" name="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300" required>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2">Status</label>
                                <select name="status" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option value="publish">Publish</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2">Order No</label>
                                <input type="number" name="order_no" value="{{ old('order_no', 0) }}" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
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

<div class="bg-white rounded-xl shadow-md overflow-hidden">
    <div class="p-4 bg-gray-50 border-b">
        <h3 class="font-semibold text-gray-700">Manage List</h3>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                    <th class="p-4 font-semibold text-gray-700">#</th>
                    <th class="p-4 font-semibold text-gray-700">Title</th>
                    <th class="p-4 font-semibold text-gray-700">Image</th>
                    <th class="p-4 font-semibold text-gray-700">Order No</th>
                    <th class="p-4 font-semibold text-gray-700">Status</th>
                    <th class="p-4 font-semibold text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($galleries as $item)
                    <tr class="border-b border-gray-100 hover:bg-gray-50 transition duration-150">
                        <td class="p-4 text-gray-600">{{ ($galleries->currentPage()-1) * $galleries->perPage() + $loop->iteration }}</td>
                        <td class="p-4 text-gray-800 font-medium">{{ $item->title ?? 'Untitled' }}</td>
                        <td class="p-4">
                            <img src="{{ asset('storage/' . $item->image_path) }}" class="w-20 h-14 object-cover rounded shadow-sm">
                        </td>
                        <td class="p-4 text-gray-600">{{ $item->order_no }}</td>
                        <td class="p-4">
                            <span class="px-2 py-1 text-xs font-bold rounded-full {{ $item->status == 'publish' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700' }}">
                                {{ ucfirst($item->status) }}
                            </span>
                        </td>
                        <td class="p-4">
                            <div class="flex gap-2">
                                <a href="{{ route('admin.about-galleries.edit', $item->id) }}" class="bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded text-sm transition transition duration-200">
                                    <i class="fas fa-edit mr-1 text-[10px]"></i>Edit
                                </a>
                                <form action="{{ route('admin.about-galleries.destroy', $item->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded text-sm transition transition duration-200">
                                        <i class="fas fa-trash mr-1 text-[10px]"></i>Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="p-8 text-center text-gray-500 italic">No records found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="p-4 border-t border-gray-100">
        {{ $galleries->links() }}
    </div>
</div>
</div>
@endsection

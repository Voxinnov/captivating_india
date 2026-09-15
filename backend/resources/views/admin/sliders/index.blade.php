@extends('layouts.admin')

@section('title', 'Sliders')

@section('content')
<div x-data="{ 
    showModal: {{ $errors->any() && !session('edit_id') ? 'true' : 'false' }}, 
    showEditModal: {{ $errors->any() && session('edit_id') ? 'true' : 'false' }},
    editData: {
        id: '',
        title: '',
        caption: '',
        order: 0,
        imageUrl: '',
        mobileImageUrl: ''
    },
    openEditModal(slider) {
        this.editData = {
            id: slider.id,
            title: slider.title || '',
            caption: slider.caption || '',
            order: slider.order,
            imageUrl: slider.image_url,
            mobileImageUrl: slider.mobile_image_url
        };
        this.showEditModal = true;
    }
}">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Slider</h2>
        <button @click="showModal = true" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-plus mr-2"></i> Add Record
        </button>
    </div>

    <!-- Add Modal Backdrop -->
    <div x-show="showModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showModal = false"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold text-gray-900" id="modal-title">New Slider</h3>
                        <button @click="showModal = false" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <form action="{{ route('admin.sliders.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input type="text" name="title" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Slider Title" value="{{ old('title') }}">
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Desktop Photo</label>
                            <input type="file" name="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300" required>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Mobile Photo (Optional)</label>
                            <input type="file" name="mobile_image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300">
                            <p class="text-xs text-gray-500 mt-1">Recommended ratio: Portrait (e.g. 9:16 or 3:4) or Square (1:1) to prevent cropping on small screens.</p>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Caption</label>
                            <input type="text" name="caption" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Caption" value="{{ old('caption') }}">
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Order</label>
                            <input type="number" name="order" value="{{ old('order', 0) }}" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
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

    <!-- Edit Modal Backdrop -->
    <div x-show="showEditModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div x-show="showEditModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showEditModal = false"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showEditModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold text-gray-900" id="modal-title">Edit Slider</h3>
                        <button @click="showEditModal = false" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <form :action="`{{ route('admin.sliders.index') }}/${editData.id}`" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input type="text" name="title" x-model="editData.title" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Slider Title">
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2">Current Desktop Photo</label>
                                <img :src="editData.imageUrl" class="w-full h-24 object-cover rounded shadow-sm">
                            </div>
                            <div x-show="editData.mobileImageUrl">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Current Mobile Photo</label>
                                <img :src="editData.mobileImageUrl" class="w-auto h-24 object-cover rounded shadow-sm mx-auto">
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">New Desktop Photo (Optional)</label>
                            <input type="file" name="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300">
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">New Mobile Photo (Optional)</label>
                            <input type="file" name="mobile_image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300">
                            <p class="text-xs text-gray-500 mt-1">Recommended ratio: Portrait (e.g. 9:16 or 3:4) or Square (1:1) to prevent cropping on small screens.</p>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Caption</label>
                            <input type="text" name="caption" x-model="editData.caption" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Caption">
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Order</label>
                            <input type="number" name="order" x-model="editData.order" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                        </div>

                        <div class="flex justify-end gap-3 mt-6">
                            <button type="button" @click="showEditModal = false" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded transition">
                                Cancel
                            </button>
                            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-4 bg-gray-50 border-b">
            <h3 class="font-semibold text-gray-700">Slider List</h3>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50 border-b border-gray-200">
                        <th class="p-4 font-semibold text-gray-700">#</th>
                        <th class="p-4 font-semibold text-gray-700">Image</th>
                        <th class="p-4 font-semibold text-gray-700">Title</th>
                        <th class="p-4 font-semibold text-gray-700">Order</th>
                        <th class="p-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($sliders as $slider)
                        <tr class="border-b border-gray-100 hover:bg-gray-50 transition duration-150">
                            <td class="p-4 text-gray-600">{{ $loop->iteration }}</td>
                            <td class="p-4">
                                <div class="flex items-center gap-4">
                                    <div>
                                        <span class="text-[10px] text-gray-400 block font-semibold mb-1">DESKTOP</span>
                                        <img src="{{ $slider->image_url }}" class="w-24 h-16 object-cover rounded shadow-sm border border-gray-150">
                                    </div>
                                    <div>
                                        <span class="text-[10px] text-gray-400 block font-semibold mb-1">MOBILE</span>
                                        @if($slider->mobile_image_url)
                                            <img src="{{ $slider->mobile_image_url }}" class="w-12 h-16 object-cover rounded shadow-sm border border-gray-150">
                                        @else
                                            <div class="w-12 h-16 bg-gray-100 rounded border border-gray-150 flex items-center justify-center">
                                                <span class="text-[9px] text-gray-400 italic">None</span>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-gray-800 font-medium">{{ $slider->title ?? 'N/A' }}</td>
                            <td class="p-4 text-gray-600">{{ $slider->order }}</td>
                            <td class="p-4">
                                <div class="flex items-center gap-2">
                                    <button @click="openEditModal({{ json_encode($slider) }})" class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm transition duration-200">
                                        <i class="fas fa-edit mr-1 text-[10px]"></i>Edit
                                    </button>
                                    <form action="{{ route('admin.sliders.destroy', $slider->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
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
                            <td colspan="5" class="p-8 text-center text-gray-500 italic">No slider records found.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection

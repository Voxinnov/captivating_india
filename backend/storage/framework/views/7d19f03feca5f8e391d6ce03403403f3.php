<?php $__env->startSection('title', 'Virtual Tours'); ?>

<?php $__env->startSection('content'); ?>
<div x-data="{ showModal: <?php echo e($errors->any() ? 'true' : 'false'); ?> }">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Virtual Tour</h2>
        <button @click="showModal = true" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-plus mr-2"></i> Add Record
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
                        <h3 class="text-lg font-bold text-gray-900" id="modal-title">New Virtual Tour</h3>
                        <button @click="showModal = false" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <form action="<?php echo e(route('admin.virtual-tours.store')); ?>" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input type="text" name="title" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Title" required value="<?php echo e(old('title')); ?>">
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea id="modal_description" name="description" class="w-full border rounded p-2 text-sm"><?php echo e(old('description')); ?></textarea>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Type</label>
                            <select name="type" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                <option value="Vlog">Vlog</option>
                                <option value="blog">blog</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Link</label>
                            <input type="url" name="link" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Link" required value="<?php echo e(old('link')); ?>">
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Virtual Tour Image <span class="text-xs font-normal text-gray-500">Size (503 x 336)</span></label>
                            <input type="file" name="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300">
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Status</label>
                            <select name="status" class="w-24 border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                <option value="Publish">Publish</option>
                                <option value="Draft">Draft</option>
                            </select>
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
            $('#modal_description').summernote({
                height: 200,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen', 'codeview', 'help']]
                ]
            });
        });
    </script>

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-4 bg-gray-50 border-b">
            <h3 class="font-semibold text-gray-700">Virtual Tours List</h3>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50 border-b border-gray-200">
                        <th class="p-4 font-semibold text-gray-700">#</th>
                        <th class="p-4 font-semibold text-gray-700">Title</th>
                        <th class="p-4 font-semibold text-gray-700">Link</th>
                        <th class="p-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__empty_1 = true; $__currentLoopData = $tours; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tour): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr class="border-b border-gray-100 hover:bg-gray-50 transition duration-150">
                            <td class="p-4 text-gray-600"><?php echo e($loop->iteration); ?></td>
                            <td class="p-4 text-gray-800 font-medium"><?php echo e($tour->title); ?></td>
                            <td class="p-4 text-blue-600 truncate max-w-xs"><a href="<?php echo e($tour->link); ?>" target="_blank"><?php echo e($tour->link); ?></a></td>
                            <td class="p-4">
                                <form action="<?php echo e(route('admin.virtual-tours.destroy', $tour->id)); ?>" method="POST" onsubmit="return confirm('Are you sure?')">
                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('DELETE'); ?>
                                    <button type="submit" class="bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded text-sm transition transition duration-200">
                                        <i class="fas fa-trash mr-1 text-[10px]"></i>Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="4" class="p-8 text-center text-gray-500 italic">No virtual tours found.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/virtual-tours/index.blade.php ENDPATH**/ ?>
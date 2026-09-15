<?php $__env->startSection('title', 'Edit Gallery Category'); ?>

<?php $__env->startSection('content'); ?>
<div class="bg-white rounded-xl shadow-md p-6">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Edit Gallery Category</h2>
        <a href="<?php echo e(route('admin.gallery.index')); ?>" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition">
            <i class="fas fa-arrow-left mr-2"></i> Back
        </a>
    </div>

    <?php if($errors->any()): ?>
        <div class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <ul class="list-disc pl-5">
                <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li><?php echo e($error); ?></li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div>
    <?php endif; ?>

    <form action="<?php echo e(route('admin.gallery.update', $gallery)); ?>" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2">Title *</label>
                <input type="text" name="title" value="<?php echo e(old('title', $gallery->title)); ?>" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" required>
            </div>
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2">Slug *</label>
                <input type="text" name="slug" value="<?php echo e(old('slug', $gallery->slug)); ?>" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" required>
            </div>
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2">Order</label>
                <input type="number" name="order" value="<?php echo e(old('order', $gallery->order)); ?>" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
            </div>
            <div class="flex items-center pt-8">
                <input type="hidden" name="is_featured" value="0">
                <input type="checkbox" name="is_featured" value="1" id="is_featured" <?php echo e(old('is_featured', $gallery->is_featured) ? 'checked' : ''); ?> class="mr-2">
                <label for="is_featured" class="text-gray-700 text-sm font-bold">Featured</label>
            </div>
        </div>

        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">Cover Image</label>
            <?php if($gallery->cover_image): ?>
                <div class="mb-3">
                    <img src="<?php echo e(asset('storage/' . $gallery->cover_image)); ?>" class="h-32 object-cover rounded shadow">
                </div>
            <?php endif; ?>
            <input type="file" name="cover_image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300">
            <p class="text-xs text-gray-500 mt-1">Leave empty to keep existing cover image.</p>
        </div>

        <div class="mb-6 border-t pt-6">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Add New Images</h3>
            <div id="image-upload-container">
                <div class="flex gap-4 mb-3 items-start">
                    <div class="flex-1">
                        <label class="block text-xs font-semibold text-gray-600 mb-1">Image File</label>
                        <input type="file" name="new_images[]" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300" multiple>
                    </div>
                </div>
                <p class="text-xs text-gray-500 mt-1">You can select multiple images at once.</p>
            </div>
        </div>

        <div class="flex justify-end gap-3">
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition">
                Update Category
            </button>
        </div>
    </form>
</div>

<div class="bg-white rounded-xl shadow-md p-6 mt-6">
    <h3 class="text-lg font-bold text-gray-800 mb-4">Existing Images in Category</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <?php $__empty_1 = true; $__currentLoopData = $gallery->images; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $img): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <div class="relative group border rounded overflow-hidden">
                <img src="<?php echo e(asset('storage/' . $img->image_path)); ?>" class="w-full h-32 object-cover">
                <div class="p-2 bg-gray-50">
                    <form action="<?php echo e(route('admin.gallery.images.destroy', $img->id)); ?>" method="POST" onsubmit="return confirm('Are you sure you want to delete this image?');">
                        <?php echo csrf_field(); ?>
                        <?php echo method_field('DELETE'); ?>
                        <button type="submit" class="w-full bg-red-100 hover:bg-red-200 text-red-700 text-xs py-1 rounded transition">
                            <i class="fas fa-trash mr-1"></i> Delete
                        </button>
                    </form>
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
            <p class="col-span-full text-center text-gray-500">No images yet.</p>
        <?php endif; ?>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/gallery/edit.blade.php ENDPATH**/ ?>
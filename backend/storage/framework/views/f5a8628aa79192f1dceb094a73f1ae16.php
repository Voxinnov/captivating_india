<?php $__env->startSection('title', 'Edit Theme'); ?>

<?php $__env->startSection('content'); ?>
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Themes</h2>
        <a href="<?php echo e(route('admin.destinations.index')); ?>" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-arrow-left mr-2"></i> Back
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="p-6 border-b border-gray-200 bg-gray-50">
            <h3 class="text-lg font-semibold text-gray-700">Edit Theme: <?php echo e($destination->title); ?></h3>
        </div>
        
        <form action="<?php echo e(route('admin.destinations.update', $destination->id)); ?>" method="POST" enctype="multipart/form-data" class="p-6">
            <?php echo csrf_field(); ?>
            <?php echo method_field('PUT'); ?>

            <!-- Title -->
            <div class="mb-6">
                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" name="title" id="title" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required value="<?php echo e(old('title', $destination->title)); ?>">
                <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="text-red-500 text-xs mt-1"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            </div>

            <!-- Slug -->
            <div class="mb-6">
                <label for="slug" class="block text-gray-700 text-sm font-bold mb-2">Slug</label>
                <input type="text" name="slug" id="slug" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required value="<?php echo e(old('slug', $destination->slug)); ?>">
                <?php $__errorArgs = ['slug'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="text-red-500 text-xs mt-1"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            </div>

            <!-- Short Description -->
            <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Short Description</label>
                <textarea name="description" id="description" rows="3" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required><?php echo e(old('description', $destination->description)); ?></textarea>
                <?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="text-red-500 text-xs mt-1"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            </div>

            <!-- Long Description -->
            <div class="mb-6">
                <label for="long_description" class="block text-gray-700 text-sm font-bold mb-2">Long Description</label>
                <textarea name="long_description" id="long_description" class="summernote"><?php echo e(old('long_description', $destination->long_description)); ?></textarea>
            </div>

            <!-- Highlights -->
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">Highlights</label>
                <div id="highlights-container" class="space-y-2">
                    <?php
                        $highlights = old('highlights', $destination->highlights ?? []);
                    ?>
                    <?php $__empty_1 = true; $__currentLoopData = $highlights; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $highlight): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <div class="flex gap-2">
                            <input type="text" name="highlights[]" value="<?php echo e($highlight); ?>" class="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 rounded"><i class="fas fa-trash"></i></button>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <div class="flex gap-2">
                            <input type="text" name="highlights[]" class="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <button type="button" onclick="this.parentElement.remove()" class="bg-red-500 text-white px-3 rounded"><i class="fas fa-trash"></i></button>
                        </div>
                    <?php endif; ?>
                </div>
                <button type="button" onclick="addHighlight()" class="mt-2 text-sm bg-green-500 text-white px-4 py-1 rounded">Add Highlight</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <!-- Image -->
                <div>
                    <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Featured Image</label>
                    <?php if($destination->image): ?>
                        <div class="mb-2">
                            <img src="<?php echo e($destination->image_url); ?>" alt="Current Image" class="h-20 w-auto rounded border">
                        </div>
                    <?php endif; ?>
                    <input type="file" name="image" id="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                </div>

                <!-- Order -->
                <div>
                    <label for="order" class="block text-gray-700 text-sm font-bold mb-2">Order</label>
                    <input type="number" name="order" id="order" value="<?php echo e(old('order', $destination->order)); ?>" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/destinations/edit.blade.php ENDPATH**/ ?>
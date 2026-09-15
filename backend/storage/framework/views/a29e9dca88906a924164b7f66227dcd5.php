<?php $__env->startSection('title', 'Edit Hotel'); ?>

<?php $__env->startSection('content'); ?>
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Hotels</h2>
        <a href="<?php echo e(route('admin.hotels.index')); ?>" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-arrow-left mr-2"></i> Back
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="p-6 border-b border-gray-200 bg-gray-50">
            <h3 class="text-lg font-semibold text-gray-700">Edit Hotel: <?php echo e($hotel->title); ?></h3>
        </div>
        
        <form action="<?php echo e(route('admin.hotels.update', $hotel->id)); ?>" method="POST" enctype="multipart/form-data" class="p-6">
            <?php echo csrf_field(); ?>
            <?php echo method_field('PUT'); ?>

            <!-- Title -->
            <div class="mb-6">
                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" name="title" id="title" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required value="<?php echo e(old('title', $hotel->title)); ?>">
                <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="text-red-500 text-xs mt-1"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            </div>

            <!-- Place -->
            <div class="mb-6 w-1/4">
                <label for="place_id" class="block text-gray-700 text-sm font-bold mb-2">Place</label>
                <select name="place_id" id="place_id" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">select</option>
                    <?php $__currentLoopData = $places; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $place): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($place->id); ?>" <?php echo e(old('place_id', $hotel->place_id) == $place->id ? 'selected' : ''); ?>><?php echo e($place->title); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
                <?php $__errorArgs = ['place_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="text-red-500 text-xs mt-1"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            </div>

            <!-- Description -->
            <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea name="description" id="description" class="summernote"><?php echo e(old('description', $hotel->description)); ?></textarea>
                <?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="text-red-500 text-xs mt-1"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            </div>

            <!-- Flag -->
            <div class="mb-6">
                <label for="flag" class="block text-gray-700 text-sm font-bold mb-2">Flag</label>
                <input type="text" name="flag" id="flag" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value="<?php echo e(old('flag', $hotel->flag)); ?>">
            </div>

            <!-- Map -->
            <div class="mb-6">
                <label for="map" class="block text-gray-700 text-sm font-bold mb-2">Map</label>
                <input type="text" name="map" id="map" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value="<?php echo e(old('map', $hotel->map)); ?>">
            </div>

            <!-- Images -->
            <div class="mb-6">
                <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Cover Image</label>
                <p class="text-xs text-gray-500 mb-1">Size (1200 x 640)</p>
                <?php if($hotel->image): ?>
                    <div class="mb-2">
                        <img src="<?php echo e($hotel->image_url); ?>" alt="Current Image" class="h-20 w-auto rounded border">
                    </div>
                <?php endif; ?>
                <div class="border border-gray-300 rounded-md p-2 bg-gray-50">
                    <input type="file" name="image" id="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                    <p class="text-xs text-gray-500 mt-1 pl-1">Browse... <?php echo e($hotel->image ? 'Change file' : 'No files selected'); ?>.</p>
                </div>
                <?php $__errorArgs = ['image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <p class="text-red-500 text-xs mt-1"><?php echo e($message); ?></p> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            </div>

            <!-- Gallery Images -->
            <div class="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <label class="block text-gray-700 text-sm font-bold mb-3">Gallery Images</label>

                <?php if($hotel->images && $hotel->images->count() > 0): ?>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <?php $__currentLoopData = $hotel->images; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $img): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="relative group border rounded bg-white p-2">
                                <img src="<?php echo e(str_starts_with($img->image_path, 'images/') ? asset($img->image_path) : asset('storage/' . $img->image_path)); ?>"
                                     alt="Gallery image"
                                     class="h-24 w-full object-cover rounded">
                                <div class="mt-2 text-right">
                                    <button type="button"
                                            onclick="if(confirm('Delete this gallery image?')) { document.getElementById('delete-hotel-img-<?php echo e($img->id); ?>').submit(); }"
                                            class="bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1 rounded transition">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                <?php else: ?>
                    <p class="text-gray-500 italic text-sm mb-4">No gallery images uploaded yet.</p>
                <?php endif; ?>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Upload New Gallery Images</label>
                    <div class="border border-gray-300 rounded-md p-2 bg-white">
                        <input type="file" name="images[]" id="images" multiple accept="image/*"
                               class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition">
                    </div>
                    <p class="text-xs text-gray-500 mt-1">You can select multiple images at once.</p>
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


<?php if($hotel->images && $hotel->images->count() > 0): ?>
    <?php $__currentLoopData = $hotel->images; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $img): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <form id="delete-hotel-img-<?php echo e($img->id); ?>" action="<?php echo e(route('admin.hotels.images.destroy', $img->id)); ?>" method="POST" class="hidden">
            <?php echo csrf_field(); ?>
            <?php echo method_field('DELETE'); ?>
        </form>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/hotels/edit.blade.php ENDPATH**/ ?>
<?php $__env->startSection('title', 'Edit Tour'); ?>

<?php $__env->startSection('content'); ?>
<div>
    <h1 class="text-3xl font-bold mb-8">Edit Tour</h1>
    <form action="<?php echo e(route('admin.tours.update', $tour)); ?>" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow">
        <?php echo csrf_field(); ?> <?php echo method_field('PUT'); ?>
        <div class="mb-4"><label class="block font-bold mb-2">Title *</label><input type="text" name="title" value="<?php echo e(old('title', $tour->title)); ?>" required class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Slug *</label><input type="text" name="slug" value="<?php echo e(old('slug', $tour->slug)); ?>" required class="w-full px-3 py-2 border rounded"></div>

        <div class="mb-4"><label class="block font-bold mb-2">Image</label><?php if($tour->image): ?><img src="<?php echo e(str_starts_with($tour->image, 'images/') ? asset($tour->image) : asset('storage/' . $tour->image)); ?>" class="mb-2 h-32"><?php endif; ?><input type="file" name="image" accept="image/*" class="w-full px-3 py-2 border rounded"></div>
        <div class="mb-4"><label class="block font-bold mb-2">Map Image</label><?php if($tour->map_image): ?><img src="<?php echo e(str_starts_with($tour->map_image, 'images/') ? asset($tour->map_image) : asset('storage/' . $tour->map_image)); ?>" class="mb-2 h-32"><?php endif; ?><input type="file" name="map_image" accept="image/*" class="w-full px-3 py-2 border rounded"></div>

        <div class="mb-6 p-4 border rounded bg-gray-50">
            <label class="block font-bold mb-3 text-lg">Tour Gallery Images</label>
            
            <?php if($tour->images && $tour->images->count() > 0): ?>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <?php $__currentLoopData = $tour->images; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $img): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="relative group border rounded bg-white p-2">
                            <img src="<?php echo e(str_starts_with($img->image_path, 'images/') ? asset($img->image_path) : asset('storage/' . $img->image_path)); ?>" class="h-24 w-full object-cover">
                            <div class="mt-2 text-right">
                                <button type="button" 
                                        onclick="if(confirm('Delete this gallery image?')) { document.getElementById('delete-img-<?php echo e($img->id); ?>').submit(); }" 
                                        class="bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1 rounded transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            <?php else: ?>
                <p class="text-gray-500 italic mb-4">No gallery images uploaded yet.</p>
            <?php endif; ?>

            <div>
                <label class="block font-bold mb-2 text-sm text-gray-700">Upload New Gallery Images</label>
                <input type="file" name="images[]" multiple accept="image/*" class="w-full px-3 py-2 border rounded bg-white">
            </div>
        </div>

        <div class="mb-4"><label class="block font-bold mb-2">Overview</label><textarea id="overview" name="overview" rows="5" class="w-full px-3 py-2 border rounded"><?php echo e(old('overview', $tour->overview)); ?></textarea></div>
        <div class="mb-6 p-4 border rounded bg-gray-50" x-data="{ itineraryType: '<?php echo e(old('itinerary_type', $tour->itinerary_type ?? 'text')); ?>' }">
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
                <textarea name="itinerary" rows="8" class="w-full px-3 py-2 border rounded font-mono text-sm"><?php echo e(old('itinerary', is_array($tour->itinerary) ? implode("\n", $tour->itinerary) : '')); ?></textarea>
            </div>

            <div x-show="itineraryType === 'pdf'" style="display: none;">
                <label class="block font-bold mb-2 text-sm text-gray-700">Itinerary PDF File</label>
                <?php if($tour->itinerary_pdf): ?>
                    <div class="mb-3 p-3 bg-white border rounded flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-file-pdf text-red-500 text-xl"></i>
                            <span class="text-sm font-medium text-gray-800">Current PDF: <?php echo e(basename($tour->itinerary_pdf)); ?></span>
                        </div>
                        <a href="<?php echo e(str_starts_with($tour->itinerary_pdf, 'http') ? $tour->itinerary_pdf : asset('storage/' . $tour->itinerary_pdf)); ?>" target="_blank" class="text-blue-600 hover:underline text-sm font-semibold">View PDF</a>
                    </div>
                <?php endif; ?>
                <input type="file" name="itinerary_pdf" accept="application/pdf" class="w-full px-3 py-2 border rounded bg-white">
                <p class="text-xs text-gray-500 mt-1">Upload a PDF file to set or replace the itinerary PDF.</p>
            </div>
        </div>
        <div class="mb-4"><label class="block font-bold mb-2">Highlights (One item per line)</label><textarea name="highlights" rows="5" class="w-full px-3 py-2 border rounded font-mono text-sm"><?php echo e(old('highlights', is_array($tour->highlights) ? implode("\n", $tour->highlights) : '')); ?></textarea></div>
        <div class="mb-4"><label class="flex items-center"><input type="checkbox" name="is_featured" value="1" <?php echo e(old('is_featured', $tour->is_featured) ? 'checked' : ''); ?> class="mr-2"><span>Featured</span></label></div>
        <div class="flex gap-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Update</button>
            <a href="<?php echo e(route('admin.tours.index')); ?>" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded">Cancel</a>
        </div>
    </form>

    <?php if($tour->images && $tour->images->count() > 0): ?>
        <?php $__currentLoopData = $tour->images; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $img): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <form id="delete-img-<?php echo e($img->id); ?>" action="<?php echo e(route('admin.tours.images.destroy', $img->id)); ?>" method="POST" class="hidden">
                <?php echo csrf_field(); ?>
                <?php echo method_field('DELETE'); ?>
            </form>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    <?php endif; ?>
</div>

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
    });
</script>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/tours/edit.blade.php ENDPATH**/ ?>
<?php $__env->startSection('title', 'Hotels'); ?>

<?php $__env->startSection('content'); ?>
<div class="container mx-auto px-4 py-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Hotels</h1>
        <a href="<?php echo e(route('admin.hotels.create')); ?>" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-plus mr-2"></i> Add New
        </a>
    </div>

    <?php if(session('success')): ?>
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
            <p><?php echo e(session('success')); ?></p>
        </div>
    <?php endif; ?>

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 text-left">
            <thead class="bg-gray-50 border-b">
                <tr>
                    <th class="px-6 py-4 font-semibold text-gray-700">Image</th>
                    <th class="px-6 py-4 font-semibold text-gray-700">Title</th>
                    <th class="px-6 py-4 font-semibold text-gray-700">Place</th>
                    <th class="px-6 py-4 font-semibold text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <?php $__empty_1 = true; $__currentLoopData = $hotels; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $hotel): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            <?php if($hotel->image): ?>
                                <img src="<?php echo e($hotel->image_url); ?>" class="w-16 h-10 object-cover rounded">
                            <?php else: ?>
                                <span class="text-gray-400">No Image</span>
                            <?php endif; ?>
                        </td>
                        <td class="px-6 py-4 font-medium"><?php echo e($hotel->title); ?></td>
                        <td class="px-6 py-4"><?php echo e($hotel->place ? $hotel->place->title : 'N/A'); ?></td>
                        <td class="px-6 py-4">
                            <div class="flex gap-3">
                                <a href="<?php echo e(route('admin.hotels.edit', $hotel->id)); ?>" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></a>
                                <form action="<?php echo e(route('admin.hotels.destroy', $hotel->id)); ?>" method="POST" class="inline" onsubmit="return confirm('Are you sure?')">
                                    <?php echo csrf_field(); ?> <?php echo method_field('DELETE'); ?>
                                    <button type="submit" class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                                </form>
                            </div>
                        </td>
                    </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                    <tr><td colspan="4" class="px-6 py-8 text-center text-gray-500">No hotels found</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
    <div class="mt-4"><?php echo e($hotels->links()); ?></div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/hotels/index.blade.php ENDPATH**/ ?>
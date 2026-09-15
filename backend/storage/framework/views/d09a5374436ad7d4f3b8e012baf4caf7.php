<?php $__env->startSection('title', 'Contact Messages'); ?>

<?php $__env->startSection('content'); ?>
<div class="mb-6">
    <h2 class="text-2xl font-bold text-gray-800">Contact Messages</h2>
</div>

<div class="bg-white rounded-xl shadow-md overflow-hidden">
    <table class="w-full text-left border-collapse">
        <thead>
            <tr class="bg-gray-50 border-b">
                <th class="p-4 font-semibold text-gray-700">Name</th>
                <th class="p-4 font-semibold text-gray-700">Email</th>
                <th class="p-4 font-semibold text-gray-700">Subject</th>
                <th class="p-4 font-semibold text-gray-700">Date</th>
                <th class="p-4 font-semibold text-gray-700">Status</th>
                <th class="p-4 font-semibold text-gray-700">Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php $__empty_1 = true; $__currentLoopData = $messages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $msg): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <tr class="border-b hover:bg-gray-50 <?php echo e(!$msg->is_read ? 'bg-blue-50' : ''); ?>">
                    <td class="p-4 font-medium"><?php echo e($msg->name); ?></td>
                    <td class="p-4"><?php echo e($msg->email); ?></td>
                    <td class="p-4"><?php echo e($msg->subject); ?></td>
                    <td class="p-4 text-sm text-gray-500"><?php echo e($msg->created_at->format('Y-m-d H:i')); ?></td>
                    <td class="p-4">
                        <?php if(!$msg->is_read): ?>
                            <span class="px-2 py-1 text-xs font-bold bg-blue-100 text-blue-700 rounded-full">New</span>
                        <?php else: ?>
                            <span class="text-xs text-gray-400">Read</span>
                        <?php endif; ?>
                    </td>
                    <td class="p-4">
                        <div class="flex gap-3">
                            <a href="<?php echo e(route('admin.contact-messages.show', $msg->id)); ?>" class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></a>
                            <form action="<?php echo e(route('admin.contact-messages.destroy', $msg->id)); ?>" method="POST" onsubmit="return confirm('Are you sure?')">
                                <?php echo csrf_field(); ?>
                                <?php echo method_field('DELETE'); ?>
                                <button type="submit" class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                            </form>
                        </div>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr><td colspan="6" class="p-8 text-center text-gray-500">No messages found.</td></tr>
            <?php endif; ?>
        </tbody>
    </table>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/contact-messages/index.blade.php ENDPATH**/ ?>
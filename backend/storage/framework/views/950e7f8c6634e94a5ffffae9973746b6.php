<?php $__env->startSection('title', 'Site Settings'); ?>

<?php $__env->startSection('content'); ?>
<div>
    <h1 class="text-3xl font-bold mb-8">Site Settings</h1>

    <form action="<?php echo e(route('admin.settings.update')); ?>" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>

        <h2 class="text-xl font-bold mb-4">General</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Site Name</label>
            <input type="text" name="site_name" value="<?php echo e($settings->firstWhere('key', 'site_name')?->value); ?>" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Site Logo</label>
            <?php if($settings->firstWhere('key', 'site_logo')?->value): ?>
                <img src="<?php echo e(asset('storage/' . $settings->firstWhere('key', 'site_logo')->value)); ?>" class="mb-2 h-20">
            <?php endif; ?>
            <input type="file" name="site_logo" accept="image/*" class="w-full px-3 py-2 border rounded">
        </div>

        <h2 class="text-xl font-bold mb-4 mt-8">Contact Information</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Email</label>
            <input type="email" name="contact_email" value="<?php echo e($settings->firstWhere('key', 'contact_email')?->value); ?>" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Phone</label>
            <input type="text" name="contact_phone" value="<?php echo e($settings->firstWhere('key', 'contact_phone')?->value); ?>" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Address</label>
            <textarea name="contact_address" rows="3" class="w-full px-3 py-2 border rounded"><?php echo e($settings->firstWhere('key', 'contact_address')?->value); ?></textarea>
        </div>

        <h2 class="text-xl font-bold mb-4 mt-8">Social Media</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Facebook URL</label>
            <input type="text" name="facebook_url" value="<?php echo e($settings->firstWhere('key', 'facebook_url')?->value); ?>" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Instagram URL</label>
            <input type="text" name="instagram_url" value="<?php echo e($settings->firstWhere('key', 'instagram_url')?->value); ?>" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">YouTube URL</label>
            <input type="text" name="youtube_url" value="<?php echo e($settings->firstWhere('key', 'youtube_url')?->value); ?>" class="w-full px-3 py-2 border rounded">
        </div>

        <h2 class="text-xl font-bold mb-4 mt-8">Footer</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Footer Text</label>
            <textarea name="footer_text" rows="2" class="w-full px-3 py-2 border rounded"><?php echo e($settings->firstWhere('key', 'footer_text')?->value); ?></textarea>
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Update Settings</button>
    </form>
</div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/settings/index.blade.php ENDPATH**/ ?>
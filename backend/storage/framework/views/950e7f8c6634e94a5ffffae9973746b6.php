<?php $__env->startSection('title', 'Site Settings'); ?>

<?php $__env->startSection('content'); ?>
<div class="max-w-5xl">
    <div class="flex justify-between items-center mb-6">
        <div>
            <h1 class="text-3xl font-bold text-gray-800">Site Settings</h1>
            <p class="text-sm text-gray-500 mt-1">Manage brand identity, contact information, social links, and footer contents.</p>
        </div>
    </div>

    <form action="<?php echo e(route('admin.settings.update')); ?>" method="POST" enctype="multipart/form-data" class="space-y-6">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>

        <!-- Brand & Identity Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div class="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
                <i class="fas fa-feather-alt text-primary text-lg"></i>
                <h2 class="text-lg font-semibold text-gray-800">Brand & Header / Footer Identity</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Site / Brand Name</label>
                    <input type="text" name="site_name" value="<?php echo e($settings->firstWhere('key', 'site_name')?->value ?? 'Captivating India'); ?>" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <p class="text-xs text-gray-500 mt-1">Displayed in the header and footer next to the logo.</p>
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Site Tagline / Subtitle</label>
                    <input type="text" name="site_tagline" value="<?php echo e($settings->firstWhere('key', 'site_tagline')?->value ?? 'Travel all Seasons'); ?>" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <p class="text-xs text-gray-500 mt-1">Displayed below the brand name (e.g. Travel all Seasons).</p>
                </div>

                <div class="md:col-span-2">
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Site Logo</label>
                    <?php if($settings->firstWhere('key', 'site_logo')?->value): ?>
                        <div class="mb-3 p-3 bg-gray-900 rounded-lg inline-block">
                            <img src="<?php echo e(asset('storage/' . $settings->firstWhere('key', 'site_logo')->value)); ?>" class="h-14 w-auto object-contain" alt="Current Logo">
                        </div>
                    <?php endif; ?>
                    <input type="file" name="site_logo" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                    <p class="text-xs text-gray-500 mt-1">Upload a new image file to replace the current logo. Leave blank to keep current.</p>
                </div>

                <div class="md:col-span-2">
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Footer Description / About Text</label>
                    <textarea name="footer_description" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><?php echo e($settings->firstWhere('key', 'footer_description')?->value ?? 'Your trusted travel partner for authentic Kerala and South India experiences. Experience the real India all around the year.'); ?></textarea>
                    <p class="text-xs text-gray-500 mt-1">Displayed in the footer under the brand logo.</p>
                </div>
            </div>
        </div>

        <!-- Contact Information Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div class="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
                <i class="fas fa-address-book text-blue-600 text-lg"></i>
                <h2 class="text-lg font-semibold text-gray-800">Contact Information</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Contact Email</label>
                    <input type="email" name="contact_email" value="<?php echo e($settings->firstWhere('key', 'contact_email')?->value ?? 'info@captivatingindia.co.uk'); ?>" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Contact Phone</label>
                    <input type="text" name="contact_phone" value="<?php echo e($settings->firstWhere('key', 'contact_phone')?->value ?? '+44 7778 403510'); ?>" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Website URL</label>
                    <input type="text" name="website_url" value="<?php echo e($settings->firstWhere('key', 'website_url')?->value ?? 'https://captivatingindia.co.uk/'); ?>" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <p class="text-xs text-gray-500 mt-1">Link and URL text shown in the contact info section.</p>
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Office / Postal Address</label>
                    <textarea name="contact_address" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><?php echo e($settings->firstWhere('key', 'contact_address')?->value ?? 'Honiton Devon UK'); ?></textarea>
                    <p class="text-xs text-gray-500 mt-1">Displayed with the location pin icon in the footer & contact page.</p>
                </div>
            </div>
        </div>

        <!-- Social Media Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div class="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
                <i class="fas fa-share-alt text-indigo-600 text-lg"></i>
                <h2 class="text-lg font-semibold text-gray-800">Social Media Links</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">
                        <i class="fab fa-facebook text-blue-600 mr-1"></i> Facebook URL
                    </label>
                    <input type="text" name="facebook_url" value="<?php echo e($settings->firstWhere('key', 'facebook_url')?->value); ?>" placeholder="https://facebook.com/..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">
                        <i class="fab fa-instagram text-pink-600 mr-1"></i> Instagram URL
                    </label>
                    <input type="text" name="instagram_url" value="<?php echo e($settings->firstWhere('key', 'instagram_url')?->value); ?>" placeholder="https://instagram.com/..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">
                        <i class="fab fa-youtube text-red-600 mr-1"></i> YouTube URL
                    </label>
                    <input type="text" name="youtube_url" value="<?php echo e($settings->firstWhere('key', 'youtube_url')?->value); ?>" placeholder="https://youtube.com/..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
        </div>

        <!-- Footer Copyright Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div class="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
                <i class="fas fa-copyright text-gray-600 text-lg"></i>
                <h2 class="text-lg font-semibold text-gray-800">Footer Copyright & Bottom Note</h2>
            </div>

            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Copyright Line</label>
                <input type="text" name="footer_text" value="<?php echo e($settings->firstWhere('key', 'footer_text')?->value ?? '© 2026 Captivating India all Rights Reserved'); ?>" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <p class="text-xs text-gray-500 mt-1">Displayed centered across the very bottom of every page.</p>
            </div>
        </div>

        <div class="flex items-center justify-end gap-4 pt-2">
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2">
                <i class="fas fa-save"></i>
                <span>Save Settings</span>
            </button>
        </div>
    </form>
</div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.admin', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /var/www/captivationgindia.bvox.in/captivating_india/backend/resources/views/admin/settings/index.blade.php ENDPATH**/ ?>
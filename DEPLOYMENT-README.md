# Captivating India - Static Website Deployment

## Deployment Instructions

This zip file contains a static build of the Captivating India website ready for deployment to a PHP server.

### Contents
- `index.html` - Main homepage
- `_next/` - Next.js static assets (CSS, JavaScript)
- `images/` - All image assets
- `.htaccess` - Apache configuration for proper routing
- All other static assets

### Upload Instructions

1. **Extract the zip file** on your local machine
2. **Upload all contents** to your web server root directory (usually `public_html` or `www`)
3. **Ensure .htaccess is uploaded** - This file is required for proper routing
4. **Verify file permissions** - Ensure files are readable (644) and directories are executable (755)

### Server Requirements

- Apache web server with mod_rewrite enabled
- PHP (for .htaccess support)
- HTTPS enabled (recommended)

### URL Structure

The website will be accessible at:
- Main page: `https://demo.captivatingindia.co.uk/`
- All assets (CSS, JS, images) will load automatically

### Troubleshooting

If images or CSS don't load:
1. Check that `.htaccess` file is uploaded
2. Verify `mod_rewrite` is enabled on Apache
3. Check file permissions (644 for files, 755 for directories)
4. Ensure all files in `_next/` and `images/` directories are uploaded

### Notes

- This is a static build - no server-side rendering required
- All images are optimized and included
- CSS and JavaScript are bundled and minified
- The site uses client-side routing with hash anchors (#about, #destinations, etc.)







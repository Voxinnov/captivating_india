#!/bin/bash

# Laravel CMS Backend Setup Script for Linux/Mac

echo "Setting up Laravel CMS Backend..."

# Check if composer is installed
if ! command -v composer &> /dev/null; then
    echo "ERROR: Composer is not installed. Please install Composer first."
    exit 1
fi

# Install dependencies
echo ""
echo "1. Installing PHP dependencies..."
composer install

# Copy .env file if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "2. Creating .env file..."
    cp .env.example .env
    echo "   Please edit .env file and configure your database settings!"
else
    echo ""
    echo "2. .env file already exists, skipping..."
fi

# Generate application key
echo ""
echo "3. Generating application key..."
php artisan key:generate

# Set permissions
echo ""
echo "4. Setting permissions..."
chmod -R 775 storage bootstrap/cache

echo ""
echo "5. Next steps:"
echo "   - Edit .env file and set your MySQL database credentials"
echo "   - Create database: CREATE DATABASE captivating_india_cms;"
echo "   - Run: php artisan migrate"
echo "   - Run: php artisan db:seed"
echo "   - Run: php artisan storage:link"
echo "   - Run: php artisan serve"
echo "   - Visit: http://localhost:8000/admin"

echo ""
echo "Setup complete! Follow the steps above to finish configuration."


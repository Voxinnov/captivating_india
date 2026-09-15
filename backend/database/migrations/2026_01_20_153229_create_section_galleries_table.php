<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('section_galleries', function (Blueprint $table) {
            $table->id();
            $table->string('section_key');
            $table->string('title')->nullable();
            $table->string('image_path');
            $table->integer('order_no')->default(0);
            $table->string('status')->default('publish');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section_galleries');
    }
};

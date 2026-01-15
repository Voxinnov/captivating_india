<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('region');
            $table->text('description');
            $table->string('image');
            $table->text('overview')->nullable();
            $table->json('itinerary')->nullable();
            $table->json('highlights')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('order')->default(0);
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('slug');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tours');
    }
};


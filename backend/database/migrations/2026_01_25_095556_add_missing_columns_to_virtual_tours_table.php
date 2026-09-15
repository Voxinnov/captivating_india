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
        Schema::table('virtual_tours', function (Blueprint $table) {
            if (!Schema::hasColumn('virtual_tours', 'description')) {
                $table->text('description')->nullable();
            }
            if (!Schema::hasColumn('virtual_tours', 'type')) {
                $table->string('type')->default('vlog');
            }
            if (!Schema::hasColumn('virtual_tours', 'status')) {
                $table->string('status')->default('publish');
            }
            if (!Schema::hasColumn('virtual_tours', 'image')) {
                $table->string('image')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('virtual_tours', function (Blueprint $table) {
            $table->dropColumn(['description', 'type', 'status', 'image']);
        });
    }
};

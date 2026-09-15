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
        Schema::table('hotels', function (Blueprint $table) {
            $table->renameColumn('name', 'title');
            $table->dropColumn('location');
            $table->foreignId('place_id')->nullable()->after('slug')->constrained('places')->onDelete('cascade');
            $table->text('flag')->nullable()->after('description');
            $table->text('map')->nullable()->after('flag');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hotels', function (Blueprint $table) {
            $table->renameColumn('title', 'name');
            $table->string('location')->nullable();
            $table->dropForeign(['place_id']);
            $table->dropColumn(['place_id', 'flag', 'map']);
        });
    }
};

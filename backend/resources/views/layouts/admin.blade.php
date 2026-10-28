<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Panel') - Captivating India CMS</title>
    <style>{!! file_get_contents(public_path('css/admin.css')) !!}</style>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- jQuery and Summernote -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <style>
        [x-cloak] { display: none !important; }
        .note-editor { background: white !important; }
    </style>
</head>
<body class="bg-gray-100" x-data="{ sidebarOpen: true, aboutOpen: {{ request()->routeIs('*.about-sections.*') ? 'true' : 'false' }} }">
    <div class="flex h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white flex flex-col" :class="sidebarOpen ? 'block' : 'hidden'">
            <div class="p-6 border-b border-gray-700">
                <h1 class="text-xl font-bold">Captivating India</h1>
                <p class="text-sm text-gray-400">CMS Admin Panel</p>
            </div>
            
            <nav class="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.dashboard') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-th-large"></i>
                    <span>Dashboard</span>
                </a>

                <a href="{{ route('admin.payment-details.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.payment-details.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Payment Details</span>
                </a>

                <!-- About Us Dropdown -->
                <div x-data="{ open: @json(request()->is('admin/about-sections*') || request()->is('admin/about-galleries*')) }">
                    <button @click="open = !open" class="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->is('admin/about-sections*') || request()->is('admin/about-galleries*') ? 'bg-gray-700' : '' }}">
                        <div class="flex items-center gap-3">
                            <i class="fas fa-info-circle"></i>
                            <span>About Us</span>
                        </div>
                        <i class="fas fa-chevron-down text-xs transition-transform" :class="open ? 'rotate-180' : ''"></i>
                    </button>
                    <div x-show="open" x-cloak class="mt-2 ml-6 space-y-1 border-l border-gray-600 pl-4">
                        @php
                            $aboutSubsections = [
                                'about' => 'About',
                                'about-gallery' => 'About Gallery',
                                'the-team' => 'The Team',
                                'team-gallery' => 'Team Gallery',
                                'our-services' => 'Our Services',
                                'services-gallery' => 'Services Gallery',
                                'why-travel-with-us' => 'Why Travel With Us',
                                'travel-with-us-gallery' => 'Travel with Us Gallery',
                                'booking' => 'Booking',
                                'booking-gallery' => 'Booking Gallery',
                                'general-info' => 'General Info',
                                'general-info-gallery' => 'General Info Gallery',
                                'theme-description' => 'Destination Description',
                                'theme-gallery' => 'Destination Gallery',
                                'tour-description' => 'Tour Description',
                                'tour-gallery' => 'Tour Gallery',
                                'activity-description' => 'Activity Description',
                                'activity-gallery' => 'Activity Gallery',
                                'hotel-description' => 'Hotel Description',
                                'hotel-gallery' => 'Hotel Gallery',
                                'gallery-description' => 'Gallery Description',
                                'gallery-gallery' => 'Gallery Gallery',
                                'contact-description' => 'Contact Description',
                                'contact-gallery' => 'Contact Gallery',
                            ];
                        @endphp
                        @foreach($aboutSubsections as $key => $label)
                            @if(str_contains($key, '-gallery'))
                                <a href="{{ route('admin.about-galleries.index', $key) }}" class="block px-3 py-1 rounded-md text-sm hover:text-white {{ request()->is('admin/about-galleries/'.$key.'*') ? 'text-white font-bold' : 'text-gray-400' }}">
                                    {{ $label }}
                                </a>
                            @else
                                <a href="{{ route('admin.about-sections.edit', $key) }}" class="block px-3 py-1 rounded-md text-sm hover:text-white {{ request()->is('admin/about-sections/'.$key.'*') ? 'text-white font-bold' : 'text-gray-400' }}">
                                    {{ $label }}
                                </a>
                            @endif
                        @endforeach
                    </div>
                </div>



                <a href="{{ route('admin.destinations.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.destinations.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>Destinations</span>
                </a>

                <a href="{{ route('admin.places.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.places.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-map-pin"></i>
                    <span>Place</span>
                </a>

                <a href="{{ route('admin.activities.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.activities.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-hiking"></i>
                    <span>Activity</span>
                </a>

                <a href="{{ route('admin.hotels.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.hotels.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-hotel"></i>
                    <span>Hotel</span>
                </a>

                <a href="{{ route('admin.tours.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.tours.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-route"></i>
                    <span>Tours</span>
                </a>

                <a href="{{ route('admin.tour-categories.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.tour-categories.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-tags"></i>
                    <span>Tour Categories</span>
                </a>

                <a href="{{ route('admin.testimonials.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.testimonials.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-comment-dots"></i>
                    <span>Testimonials</span>
                </a>

                <a href="{{ route('admin.gallery.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.gallery.index') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-layer-group"></i>
                    <span>Gallery list</span>
                </a>
                
                <a href="{{ route('admin.gallery.images') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.gallery.images') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-images"></i>
                    <span>Gallery</span>
                </a>

                <a href="{{ route('admin.virtual-tours.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.virtual-tours.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-vr-cardboard"></i>
                    <span>Virtual Tour</span>
                </a>

                <a href="{{ route('admin.sliders.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.sliders.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-sliders-h"></i>
                    <span>Slider</span>
                </a>

                <a href="{{ route('admin.contact-messages.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.contact-messages.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-envelope"></i>
                    <span>Contact</span>
                </a>

                <a href="{{ route('admin.settings.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.settings.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-cog"></i>
                    <span>Site Settings</span>
                </a>
            </nav>
            
            <div class="p-4 border-t border-gray-700">
                <form method="POST" action="{{ route('admin.logout') }}">
                    @csrf
                    <button type="submit" class="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 text-red-400">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </button>
                </form>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto">
            <div class="p-8">
                @if(session('success'))
                    <div class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <span class="block sm:inline">{{ session('success') }}</span>
                    </div>
                @endif

                @if(session('error'))
                    <div class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span class="block sm:inline">{{ session('error') }}</span>
                    </div>
                @endif

                @if($errors->any())
                    <div class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <ul class="list-disc list-inside">
                            @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                @yield('content')
            </div>
        </main>
    </div>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Panel') - Captivating India CMS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        [x-cloak] { display: none !important; }
    </style>
</head>
<body class="bg-gray-100">
    <div class="flex h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white flex flex-col">
            <div class="p-6 border-b border-gray-700">
                <h1 class="text-xl font-bold">Captivating India</h1>
                <p class="text-sm text-gray-400">CMS Admin Panel</p>
            </div>
            
            <nav class="flex-1 p-4 space-y-2">
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.dashboard') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span>
                </a>
                <a href="{{ route('admin.home-page.edit') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.home-page.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-home"></i>
                    <span>Home Page</span>
                </a>
                <a href="{{ route('admin.pages.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.pages.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-file-alt"></i>
                    <span>Pages</span>
                </a>
                <a href="{{ route('admin.testimonials.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.testimonials.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-quote-left"></i>
                    <span>Testimonials</span>
                </a>
                <a href="{{ route('admin.destinations.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.destinations.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Destinations</span>
                </a>
                <a href="{{ route('admin.tours.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.tours.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-route"></i>
                    <span>Tours</span>
                </a>
                <a href="{{ route('admin.hotels.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.hotels.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-hotel"></i>
                    <span>Hotels</span>
                </a>
                <a href="{{ route('admin.activities.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.activities.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-hiking"></i>
                    <span>Activities</span>
                </a>
                <a href="{{ route('admin.gallery.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.gallery.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-images"></i>
                    <span>Gallery</span>
                </a>
                <a href="{{ route('admin.settings.index') }}" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 {{ request()->routeIs('admin.settings.*') ? 'bg-gray-700' : '' }}">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
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


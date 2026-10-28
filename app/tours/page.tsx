'use client'

import Link from 'next/link'
import { useEffect, useState, useMemo } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import { stripHtml } from '@/lib/utils'
import { Search, X, Filter, RotateCcw } from 'lucide-react'

interface TourDescription {
  title: string
  description: string
  meta_tags: string | null
}

interface TourCategory {
  id: number
  title: string
  slug: string
  description?: string | null
  tours_count?: number
}

interface TourItem {
  id: number
  title: string
  slug: string
  category?: {
    id: number
    title: string
    slug: string
  } | null
  region?: string | null
  description?: string | null
  image?: string | null
  map_image?: string | null
  overview?: string | null
  places?: Array<{ id: number; title: string; slug: string }>
}

export default function ToursPage() {
  const [tourDescription, setTourDescription] = useState<TourDescription | null>(null)
  const [isLoadingDescription, setIsLoadingDescription] = useState(true)
  const [tours, setTours] = useState<TourItem[]>([])
  const [categories, setCategories] = useState<TourCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoadingTours, setIsLoadingTours] = useState(true)

  // Initialize selected category from URL query param if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const catParam = params.get('category')
      if (catParam) {
        setSelectedCategory(catParam)
      }
    }
  }, [])

  // Fetch tour description, categories and tours from API
  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-sections?key=tour-description`
        )
        if (response.ok) {
          const data = await response.json()
          setTourDescription(data)
        }
      } catch (error) {
        console.error('Failed to fetch tour description:', error)
      } finally {
        setIsLoadingDescription(false)
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/tour-categories`
        )
        if (response.ok) {
          const result = await response.json()
          setCategories(result.data || [])
        }
      } catch (error) {
        console.error('Failed to fetch tour categories:', error)
      }
    }

    const fetchTours = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/tours`
        )
        if (response.ok) {
          const result = await response.json()
          setTours(result.data || [])
        }
      } catch (error) {
        console.error('Failed to fetch tours:', error)
      } finally {
        setIsLoadingTours(false)
      }
    }

    fetchDescription()
    fetchCategories()
    fetchTours()
  }, [])

  // Filter tours based on category and search query
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        tour.category?.slug === selectedCategory ||
        tour.category?.id?.toString() === selectedCategory

      // Search query filter
      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCategory

      const matchesSearch =
        (tour.title && tour.title.toLowerCase().includes(query)) ||
        (tour.region && tour.region.toLowerCase().includes(query)) ||
        (tour.overview && tour.overview.toLowerCase().includes(query)) ||
        (tour.description && tour.description.toLowerCase().includes(query)) ||
        (tour.category?.title && tour.category.title.toLowerCase().includes(query)) ||
        (tour.places && tour.places.some((p) => p.title?.toLowerCase().includes(query)))

      return matchesCategory && matchesSearch
    })
  }, [tours, selectedCategory, searchQuery])

  // Count active tours in each category
  const getCategoryCount = (categorySlug: string) => {
    return tours.filter(
      (t) => t.category?.slug === categorySlug || t.category?.id?.toString() === categorySlug
    ).length
  }

  const handleResetFilters = () => {
    setSelectedCategory('all')
    setSearchQuery('')
  }

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero - Dynamic from tour-gallery */}
      <DynamicHeroSection
        galleryKey="tour-gallery"
        fallbackTitle="Tours & Holiday Ideas"
        fallbackImage="/images/rithudmc-keralabackwaters-kumarakom-9085.jpg"
      />

      {/* Intro + Search & Filter + tour cards */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-10 text-sm md:text-base text-muted-foreground">
          {/* Dynamic description from tour-description */}
          {isLoadingDescription ? (
            <div className="space-y-4">
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
            </div>
          ) : tourDescription ? (
            <div
              className="space-y-4 text-justify leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: tourDescription.description }}
            />
          ) : (
            <div className="space-y-4 text-justify leading-relaxed">
              <p>
                South India, with its rich history, diverse traditions and vibrant artisan communities,
                offers a unique and immersive journey for travellers interested in culture, crafts and
                landscapes. A carefully designed tour is not just a showcase of monuments and scenery,
                but a deep dive into living traditions, temple architecture, cuisine and daily life.
              </p>
              <p>
                The tours below are examples of what is possible. They may not match your exact
                requirements, but we specialise in creating tailor‑made journeys that fit your interests,
                pace and travel dates. With experienced consultants in the UK and a dedicated team in
                India to manage your arrangements, you can look forward to a hassle‑free and thoroughly
                enjoyable holiday.
              </p>
              <p>
                Do contact us at{' '}
                <a
                  href="mailto:info@captivatingindia.co.uk"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  info@captivatingindia.co.uk
                </a>{' '}
                for an obligation‑free quote or to arrange a call back.
              </p>
            </div>
          )}

          {/* Search & Filter Toolbar */}
          <div className="bg-card rounded-2xl border border-border/80 p-5 md:p-6 shadow-sm space-y-5">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tours by name, destination, region, or keywords..."
                  className="w-full pl-10 pr-9 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-background border border-border rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition w-full md:w-auto">
                  <Filter className="w-4 h-4 text-primary shrink-0" />
                  <label htmlFor="tour-category-select" className="sr-only">Filter by Category</label>
                  <select
                    id="tour-category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-transparent border-0 text-sm font-medium text-foreground focus:outline-none cursor-pointer py-1 pr-2 w-full md:w-auto"
                  >
                    <option value="all">All Categories ({tours.length})</option>
                    {categories.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.title} ({getCategoryCount(cat.slug)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Active Filters Summary / Results Count */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground pt-3 border-t border-border/60">
              <div>
                Showing <strong className="text-foreground">{filteredTours.length}</strong> of{' '}
                <strong className="text-foreground">{tours.length}</strong> tours
                {selectedCategory !== 'all' && (
                  <>
                    {' '}in{' '}
                    <span className="font-semibold text-primary">
                      {categories.find((c) => c.slug === selectedCategory)?.title || selectedCategory}
                    </span>
                  </>
                )}
                {searchQuery.trim() && (
                  <>
                    {' '}matching &ldquo;
                    <span className="font-semibold text-foreground">{searchQuery}</span>&rdquo;
                  </>
                )}
              </div>

              {(selectedCategory !== 'all' || searchQuery.trim()) && (
                <button
                  onClick={handleResetFilters}
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1.5 transition ml-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* Tours Grid */}
          {isLoadingTours ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card h-80 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : filteredTours.length === 0 ? (
            /* Empty State */
            <div className="bg-card rounded-2xl border border-dashed border-border p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">No tours found</h4>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                We couldn&apos;t find any tours matching your search criteria. Try selecting a different category or clearing your search term.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                View all tours
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTours.map((tour) => (
                <article
                  key={tour.slug}
                  className="bg-card rounded-2xl border border-border/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div
                    className="h-40 md:h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url('${tour.image || '/placeholder.jpg'}')` }}
                  />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {tour.category?.title && (
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(tour.category!.slug)}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition cursor-pointer"
                          title={`Filter by ${tour.category.title}`}
                        >
                          {tour.category.title}
                        </button>
                      )}
                      {tour.region && (
                        <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">
                          {tour.region}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground text-justify leading-relaxed mb-4 line-clamp-3">
                      {stripHtml(tour.overview || tour.description || '')}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

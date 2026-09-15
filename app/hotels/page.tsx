'use client'

import Link from 'next/link'
import { useMemo, useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import { Hotel } from '@/lib/hotels'
import { stripHtml } from '@/lib/utils'

interface HotelDescription {
  title: string
  description: string
  meta_tags: string | null
}

export default function HotelsListingPage() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [destination, setDestination] = useState<string>('All')
  const [search, setSearch] = useState<string>('')
  const [hotelDescription, setHotelDescription] = useState<HotelDescription | null>(null)
  const [isLoadingDescription, setIsLoadingDescription] = useState(true)
  const [isLoadingHotels, setIsLoadingHotels] = useState(true)

  // Fetch hotel description from API
  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-sections?key=hotel-description`)
        if (response.ok) {
          const data = await response.json()
          setHotelDescription(data)
        }
      } catch (error) {
        console.error('Failed to fetch hotel description:', error)
      } finally {
        setIsLoadingDescription(false)
      }
    }

    const fetchHotels = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/hotels`)
        if (response.ok) {
          const json = await response.json()
          setHotels(json.data || [])
        }
      } catch (error) {
        console.error('Failed to fetch hotels:', error)
      } finally {
        setIsLoadingHotels(false)
      }
    }

    fetchDescription()
    fetchHotels()
  }, [])

  const hotelDestinations = useMemo(() => {
    return Array.from(new Set(hotels.map((h) => h.location))).sort()
  }, [hotels])

  const filteredHotels = useMemo(() => {
    let list: Hotel[] = hotels

    if (destination !== 'All') {
      list = list.filter((hotel) => hotel.location === destination)
    }

    if (search.trim()) {
      const term = search.toLowerCase()
      list = list.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(term) ||
          hotel.location.toLowerCase().includes(term),
      )
    }

    return list
  }, [destination, search, hotels])

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero - Dynamic from hotel-gallery */}
      <DynamicHeroSection
        galleryKey="hotel-gallery"
        fallbackTitle="Hotels"
        fallbackImage="/images/rithudmc-keralabackwaters-kumarakom-2808.jpg"
      />

      {/* Intro + search like https://www.travelagentinkerala.com/hotels.php */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Dynamic description from hotel-description */}
          {isLoadingDescription ? (
            <div className="space-y-4">
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
            </div>
          ) : hotelDescription ? (
            <div
              className="space-y-4 text-sm md:text-base text-muted-foreground text-justify prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: hotelDescription.description }}
            />
          ) : (
            <div className="space-y-4 text-sm md:text-base text-muted-foreground text-justify">
              <p>
                South India comprises of the states of Kerala, Tamil Nadu, Andhra Pradesh, Karnataka, Goa
                and the islands of Lakshadweep and Andaman &amp; Nicobar. Each state has its own
                language and cuisine, and the people have distinct customs that vary even within each
                state.
              </p>
              <p>
                The region is naturally endowed with fertile lowlands, long coastal stretches, dense
                forests, high mountains and vast plateaus. Its architectural grandeur is reflected in
                magnificent domes and minarets, sprawling temple complexes with beautiful carvings and
                giant statues, and charming colonial‑era quarters.
              </p>
              <p>
                Below is a selection of hotels and retreats that we regularly work with – from heritage
                mansions and boutique bungalows to contemporary luxury resorts – chosen for their
                character, comfort and location.
              </p>
            </div>
          )}

          {/* Search bar + destination dropdown */}
          <div className="rounded-2xl bg-card/80 shadow-md border border-border/60 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:items-end">
              <div className="flex-1 space-y-1.5">
                <label className="text-xs md:text-sm font-medium text-foreground">
                  Keyword
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Search by hotel name or location"
                />
              </div>

              <div className="w-full md:w-64 space-y-1.5">
                <label className="text-xs md:text-sm font-medium text-foreground">
                  Select destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="All">-- All destinations --</option>
                  {hotelDestinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Hotels grid listing */}
          {isLoadingHotels ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/70 h-80 animate-pulse">
                  <div className="h-52 bg-muted" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredHotels.map((hotel) => (
                <article
                  key={hotel.name + hotel.slug}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-52 md:h-56 bg-muted overflow-hidden">
                    <img
                      src={hotel.image || '/placeholder.jpg'}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-xs font-medium text-white/80 uppercase tracking-wide">
                        {hotel.location}
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                        {hotel.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    <p className="text-xs md:text-sm text-muted-foreground text-justify leading-relaxed mb-4 line-clamp-3">
                      {stripHtml(hotel.description)}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/hotels/${hotel.slug}`}
                        className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

              {filteredHotels.length === 0 && (
                <p className="text-sm text-muted-foreground col-span-full text-center py-8">
                  No hotels found for your current filters. Please adjust the destination or keyword and
                  try again.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}



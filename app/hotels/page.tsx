'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { HOTELS, HOTEL_DESTINATIONS, Hotel } from '@/lib/hotels'

export default function HotelsListingPage() {
  const [destination, setDestination] = useState<string>('All')
  const [search, setSearch] = useState<string>('')

  const filteredHotels = useMemo(() => {
    let list: Hotel[] = HOTELS

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
  }, [destination, search])

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[260px] md:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rithudmc-keralabackwaters-kumarakom-2808.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Hotels
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl">
              Suggestions for places to stay while you are here – a curated collection of characterful
              hotels, boutique retreats and luxury resorts across India.
            </p>
          </div>
        </div>
      </section>

      {/* Intro + search like https://www.travelagentinkerala.com/hotels.php */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-8">
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
                  {HOTEL_DESTINATIONS.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Hotels grid listing */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredHotels.map((hotel) => (
              <article
                key={hotel.name}
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
                  <p className="text-xs md:text-sm text-muted-foreground text-justify leading-relaxed mb-4">
                    {hotel.description}
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
        </div>
      </section>

      <Footer />
    </main>
  )
}



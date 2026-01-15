'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ACTIVITIES, ACTIVITY_DESTINATIONS, Activity } from '@/lib/activities'

export default function ActivitiesPage() {
  const [destination, setDestination] = useState<string>('All')
  const [search, setSearch] = useState<string>('')

  const filteredActivities = useMemo(() => {
    let list: Activity[] = ACTIVITIES

    if (destination !== 'All') {
      list = list.filter((activity) => activity.destination === destination)
    }

    if (search.trim()) {
      const term = search.toLowerCase()
      list = list.filter(
        (activity) =>
          activity.title.toLowerCase().includes(term) ||
          activity.destination.toLowerCase().includes(term),
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
          style={{ backgroundImage: "url('/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
              Activities
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Experiences &amp; Activities
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl">
              Hand‑picked experiences that take you beyond the usual sightseeing – from backwater
              cruises and village walks to plantation visits, wildlife safaris and cultural evenings.
            </p>
          </div>
        </div>
      </section>

      {/* Content – inspired by https://www.travelagentinkerala.com/activity.php */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-8 text-sm md:text-base text-muted-foreground">
          <div className="space-y-4 text-justify leading-relaxed">
            <p>
              Looking for an experiential journey that goes beyond the standard tourist circuit? Our
              activities portfolio is designed to help you discover the true character of each
              destination – its people, landscapes, food and traditions – in a relaxed, authentic way.
            </p>
            <p>
              Many of these experiences are exclusive to Captivating India and are curated in
              partnership with trusted local hosts. They can be woven into a longer itinerary or
              enjoyed as stand‑alone half‑day or full‑day excursions.
            </p>
          </div>

          {/* Filter bar similar to hotels listing */}
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
                  placeholder="Search by activity or destination"
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
                  {ACTIVITY_DESTINATIONS.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Activities grid listing */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredActivities.map((activity) => (
              <article
                key={activity.slug}
                className="bg-card rounded-2xl border border-border/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div
                  className="h-40 md:h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url('${activity.image || '/placeholder.jpg'}')` }}
                />
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-[11px] uppercase tracking-wide text-primary font-semibold mb-1">
                    {activity.destination}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground text-justify leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/activities/${activity.slug}`}
                      className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {filteredActivities.length === 0 && (
              <p className="text-sm text-muted-foreground col-span-full text-center py-8">
                No activities found for your current filters. Please adjust the destination or keyword
                and try again.
              </p>
            )}
          </div>

          <p className="text-xs md:text-sm text-muted-foreground text-center pt-4">
            All activities are offered subject to local conditions and availability. Our team will
            be happy to suggest the best options based on your interests, time and pace of travel.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


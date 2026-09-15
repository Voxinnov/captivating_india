'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import { stripHtml } from '@/lib/utils'


interface TourDescription {
  title: string
  description: string
  meta_tags: string | null
}

export default function ToursPage() {
  const [tourDescription, setTourDescription] = useState<TourDescription | null>(null)
  const [isLoadingDescription, setIsLoadingDescription] = useState(true)
  const [tours, setTours] = useState<any[]>([])
  const [isLoadingTours, setIsLoadingTours] = useState(true)

  // Fetch tour description from API
  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-sections?key=tour-description`)
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

    const fetchTours = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/tours`)
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
    fetchTours()
  }, [])

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero - Dynamic from tour-gallery */}
      <DynamicHeroSection
        galleryKey="tour-gallery"
        fallbackTitle="Tours & Holiday Ideas"
        fallbackImage="/images/rithudmc-keralabackwaters-kumarakom-9085.jpg"
      />

      {/* Intro + tour cards – inspired by https://textiletours.co.uk/tours */}
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

          {isLoadingTours ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card h-80 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour) => (
                <article
                  key={tour.slug}
                  className="bg-card rounded-2xl border border-border/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div
                    className="h-40 md:h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url('${tour.image || '/placeholder.jpg'}')` }}
                  />
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-[11px] uppercase tracking-wide text-primary font-semibold mb-1">
                      {tour.region}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground text-justify leading-relaxed mb-4 line-clamp-3">
                      {stripHtml(tour.description)}
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



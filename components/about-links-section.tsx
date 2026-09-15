'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type AboutLinkKey =
  | 'about'
  | 'team'
  | 'services'
  | 'why'
  | 'testimonials'
  | 'booking'
  | 'general'

const aboutTiles: { key: AboutLinkKey; title: string; image: string; href: string }[] = [
  {
    key: 'about',
    title: 'About',
    image: '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
    href: '/about',
  },
  {
    key: 'team',
    title: 'The Team',
    image: '/images/rithu-dmc-about-1430.jpg',
    href: '/team',
  },
  {
    key: 'services',
    title: 'Services',
    image: '/images/29-05-2021-12-37-36-Mararikulam---1.jpg',
    href: '/services',
  },
  {
    key: 'why',
    title: 'Why Travel With Us',
    image: '/images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
    href: '/why-travel-with-us',
  },
  {
    key: 'testimonials',
    title: 'Testimonials',
    image: '/images/odishatribaltourkeralatravelagent-8565.jpg',
    href: '/testimonials',
  },
  {
    key: 'booking',
    title: 'Booking and Payment',
    image: '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
    href: '/booking-and-payment',
  },
  {
    key: 'general',
    title: 'General Info',
    image: '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
    href: '/general-information',
  },
]

export default function AboutLinksSection({ current }: { current?: AboutLinkKey }) {
  const [dynamicImages, setDynamicImages] = useState<Record<string, string>>({})

  useEffect(() => {
    const fetchImages = async () => {
      const keys: Partial<Record<AboutLinkKey, string>> = {
        about: 'about-gallery',
        team: 'team-gallery',
        services: 'services-gallery',
        why: 'travel-with-us-gallery',
        booking: 'booking-gallery',
        general: 'general-info-gallery',
      }

      const newImages: Record<string, string> = {}

      await Promise.all(
        Object.entries(keys).map(async ([tileKey, galleryKey]) => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-galleries?key=${galleryKey}`)
            if (response.ok) {
              const data = await response.json()
              if (Array.isArray(data) && data.length > 0 && data[0].image) {
                newImages[tileKey] = data[0].image
              }
            }
          } catch (error) {
            console.error(`Failed to fetch image for gallery key ${galleryKey}:`, error)
          }
        })
      )

      setDynamicImages((prev) => ({ ...prev, ...newImages }))
    }

    fetchImages()
  }, [])

  const tilesToShow = current
    ? aboutTiles.filter((tile) => tile.key !== current)
    : aboutTiles

  return (
    <section className="py-10 md:py-14 px-4 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
            Learn more about Captivating India
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-justify md:text-center">
            Explore the people, services and travel philosophy behind our journeys – from the team that plans your
            holiday to testimonials, booking information and general travel guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {tilesToShow.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="relative group overflow-hidden rounded-2xl bg-card shadow-md border border-white/10 min-h-[180px] md:min-h-[200px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <img
                src={dynamicImages[tile.key] || tile.image || '/placeholder.jpg'}
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />

              <div className="relative z-10 h-full flex flex-col items-center justify-end pb-5 pt-8 px-4 text-center">
                <p className="text-white text-base md:text-lg font-medium mb-2">
                  {tile.title}
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/10 px-4 py-1.5 text-xs md:text-sm text-white tracking-wide uppercase group-hover:bg-white/20 transition-colors">
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}



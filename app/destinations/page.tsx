'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import AttractiveThemesGrid from '@/components/attractive-themes-grid'

interface SectionData {
  title: string
  description: string
  meta_tags: string | null
}

export default function DestinationsPage() {
  const [data, setData] = useState<SectionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-sections?key=theme-description`)
        if (response.ok) {
          const result = await response.json()
          setData(result)
        }
      } catch (error) {
        console.error('Failed to fetch destination description section:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="w-full min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <DynamicHeroSection
        galleryKey="theme-gallery"
        fallbackTitle="Curated Destinations"
        fallbackImage="/images/rithudmc-keralabackwaters-kumarakom-9085.jpg"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          ) : data ? (
            <>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight">
                {data.title}
              </h2>
              <div
                className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light text-justify md:text-center prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </>
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight">
                Discover Your Perfect <span className="text-primary font-medium italic">Destination</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light text-justify md:text-center">
                From the serene backwaters of Kerala to the vibrant cultural heartland of North India, our curated destinations
                offer unique and immersive experiences tailored to your interests. Whether you&apos;re seeking a textile tour,
                a colonial heritage trail, or a peaceful village retreat, we have the perfect itinerary for you.
              </p>
            </>
          )}
        </div>
      </section>

      <div className="flex-1">
        <AttractiveThemesGrid />
      </div>

      <Footer />
    </main>
  )
}

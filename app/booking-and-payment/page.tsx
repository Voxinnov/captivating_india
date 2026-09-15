'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'
import DynamicHeroSection from '@/components/dynamic-hero-section'


interface SectionData {
  title: string
  description: string
  meta_tags: string | null
}

export default function BookingAndPaymentPage() {
  const [data, setData] = useState<SectionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-sections?key=booking`)
        if (response.ok) {
          const result = await response.json()
          setData(result)
        }
      } catch (error) {
        console.error('Failed to fetch booking-and-payment section:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <DynamicHeroSection
        galleryKey="booking-gallery"
        fallbackTitle="Booking & Payment"
        fallbackImage="/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg"
      />

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-6 text-sm md:text-base text-muted-foreground text-justify">
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ) : data ? (
            <>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2 text-center">{data.title}</h2>
              <div
                className="prose prose-lg max-w-none text-muted-foreground text-justify"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
              {/* Pay Now button – opens internal payment form page */}
              <div className="pt-4 flex justify-center">
                <Link
                  href="/payment"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-2.5 text-sm md:text-base font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Pay Now
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground">Content not available.</div>
          )}
        </div>
      </section>

      <AboutLinksSection current="booking" />

      <Footer />
    </main>
  )
}



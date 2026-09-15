'use client'

import React, { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'
import DynamicHeroSection from '@/components/dynamic-hero-section'


interface SectionData {
  title: string
  description: string
  meta_tags: string | null
}

export default function GeneralInformationPage() {
  const [data, setData] = useState<SectionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-sections?key=general-info`)
        if (response.ok) {
          const result = await response.json()
          setData(result)
        }
      } catch (error) {
        console.error('Failed to fetch general-information section:', error)
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
        galleryKey="general-info-gallery"
        fallbackTitle="General Information"
        fallbackImage="/images/rithudmc-keralabackwaters-kumarakom-9085.jpg"
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
            </>
          ) : (
            <div className="text-center text-muted-foreground">Content not available.</div>
          )}
        </div>
      </section>

      <AboutLinksSection current="general" />

      <Footer />
    </main>
  )
}



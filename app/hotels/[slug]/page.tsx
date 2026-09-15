'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Hotel } from '@/lib/hotels'
import { formatHtmlContent } from '@/lib/utils'

export default function HotelDetailPage() {
  const params = useParams()
  const slug = params?.slug as string

  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    const fetchHotel = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
        const response = await fetch(`${apiUrl}/api/v1/hotels/${slug}`)
        if (response.ok) {
          const json = await response.json()
          if (json.data) {
            setHotel(json.data)
          } else {
            setNotFound(true)
          }
        } else {
          setNotFound(true)
        }
      } catch (error) {
        console.error('Failed to fetch hotel details:', error)
        setNotFound(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchHotel()
  }, [slug])

  const gallery = hotel?.gallery ?? []

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero – tall banner matching listing pages */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[600px]">
        {/* Background image */}
        <div className="absolute inset-0">
          {hotel?.image ? (
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-muted animate-pulse" />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text */}
        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            {isLoading ? (
              <>
                <div className="h-3 w-16 bg-white/30 rounded animate-pulse" />
                <div className="h-10 w-80 bg-white/30 rounded animate-pulse" />
              </>
            ) : notFound ? (
              <h1 className="text-3xl md:text-4xl font-light text-white">Hotel Not Found</h1>
            ) : (
              <>
                <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/70">
                  Hotel
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
                  {hotel!.name}
                </h1>
                <p className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
                  {hotel!.location}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main details */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-5xl mx-auto space-y-10 text-sm md:text-base text-muted-foreground">

          {isLoading ? (
            <div className="space-y-4">
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
            </div>
          ) : notFound ? (
            <p className="text-center text-muted-foreground">
              The hotel you are looking for could not be found.
            </p>
          ) : (
            <>
              {/* Description */}
              <div
                className="space-y-4 text-justify leading-relaxed prose max-w-none text-muted-foreground [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
                dangerouslySetInnerHTML={{
                  __html: formatHtmlContent(hotel!.longDescription || hotel!.description),
                }}
              />

              {/* Gallery – only shown when images are uploaded */}
              {gallery.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-base md:text-lg font-semibold text-foreground">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {gallery.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-lg aspect-[4/3] bg-muted"
                      >
                        <img
                          src={src}
                          alt={`${hotel!.name} gallery image ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

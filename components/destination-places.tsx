'use client'

import Link from 'next/link'
import { MapPin, ArrowRight, Compass } from 'lucide-react'
import { stripHtml } from '@/lib/utils'

interface Place {
  id: number
  title: string
  slug: string
  description?: string
  image?: string
  activities_count?: number
}

interface DestinationPlacesProps {
  places: Place[]
  destinationTitle: string
}

export default function DestinationPlaces({ places, destinationTitle }: DestinationPlacesProps) {
  if (!places || places.length === 0) return null

  return (
    <div className="space-y-10 mt-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-8">
        <div>
          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
            <Compass size={18} />
            <span className="uppercase tracking-widest text-sm">Explore Within</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Places in {destinationTitle}
          </h2>
          <p className="text-muted-foreground mt-2 text-base">
            Discover the remarkable places that make this destination special.
          </p>
        </div>
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <div
            key={place.id}
            className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={place.image || '/placeholder.jpg'}
                alt={place.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Place label */}
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] uppercase tracking-widest text-white font-bold flex items-center gap-1.5 shadow-lg">
                  <MapPin size={12} />
                  <span>Place</span>
                </div>
              </div>

              {/* Activities count badge */}
              {place.activities_count !== undefined && place.activities_count > 0 && (
                <div className="absolute bottom-4 right-4">
                  <div className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-xs text-white font-semibold shadow-lg">
                    {place.activities_count} {place.activities_count === 1 ? 'Activity' : 'Activities'}
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                {place.title}
              </h3>
              {place.description && (
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {stripHtml(place.description)}
                </p>
              )}

              <Link
                href={`/places/${place.slug}`}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto"
              >
                <span>Read More</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

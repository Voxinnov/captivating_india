'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { stripHtml } from '@/lib/utils'

interface Activity {
  id: number
  title: string
  slug: string
  place_id: number
  location: string
  description: string
  image: string
}

interface Place {
  id: number
  title: string
  slug: string
}

interface ThemeActivitiesProps {
  activities: Activity[]
  places: Place[]
}

export default function ThemeActivities({ activities, places }: ThemeActivitiesProps) {
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | 'all'>('all')

  // Dynamically extract unique places from the activities list to ensure all places with activities are represented
  const displayPlaces = Array.from(
    new Map(
      activities
        .filter((activity) => activity.place_id && activity.location)
        .map((activity) => [
          activity.place_id,
          { id: activity.place_id, title: activity.location }
        ])
    ).values()
  ).sort((a, b) => a.title.localeCompare(b.title))

  const filteredActivities = selectedPlaceId === 'all'
    ? activities
    : activities.filter(activity => activity.place_id === selectedPlaceId)

  return (
    <div className="space-y-10 mt-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Destination Activities</h2>
          <p className="text-muted-foreground mt-2">Discover curated experiences within this destination.</p>
        </div>

        <div className="w-full md:w-64">
          <select
            value={selectedPlaceId}
            onChange={(e) => {
              const val = e.target.value
              setSelectedPlaceId(val === 'all' ? 'all' : Number(val))
            }}
            className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer shadow-sm hover:border-muted-foreground/30"
          >
            <option value="all">All Places</option>
            {displayPlaces.map((place) => (
              <option key={place.id} value={place.id}>
                {place.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={activity.image || '/placeholder.jpg'}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] uppercase tracking-widest text-white font-bold flex items-center gap-1.5 shadow-lg">
                    <MapPin size={12} />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                  {stripHtml(activity.description)}
                </p>
                
                <Link
                  href={`/activities/${activity.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  <span>Explore Activity</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border">
          <p className="text-muted-foreground">No activities found for the selected place.</p>
        </div>
      )}
    </div>
  )
}

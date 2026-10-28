import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import { CheckCircle, MapPin, ArrowLeft, ArrowRight, Send } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import { formatHtmlContent, stripHtml } from '@/lib/utils'

interface Activity {
  id: number
  title: string
  slug: string
  description: string
  image: string
}

interface PlaceDetail {
  id: number
  title: string
  slug: string
  description: string
  image: string
  map?: string
  gallery?: { id: number; url: string }[]
  destination?: { id: number; title: string; slug: string } | null
  activities?: Activity[]
}

async function getPlace(slug: string): Promise<PlaceDetail | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/places/${slug}`, {
      next: { revalidate: 3600 },
    })
    if (response.ok) {
      const json = await response.json()
      return json.data
    }
  } catch (error) {
    console.error('Failed to fetch place:', error)
  }
  return null
}

export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/places`)
    if (response.ok) {
      const json = await response.json()
      return (json.data || []).map((place: PlaceDetail) => ({ slug: place.slug }))
    }
  } catch (error) {
    console.error('Failed to generate static params for places:', error)
  }
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const place = await getPlace(slug)
  return {
    title: place ? `${place.title} - Captivating India` : 'Place Not Found',
    description: place ? stripHtml(place.description || '').slice(0, 160) : 'Explore this place with Captivating India.',
  }
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const place = await getPlace(slug)

  if (!place) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
        <Navigation />
        <h1 className="text-4xl font-bold mb-4">Place Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The place you're looking for doesn't exist or is currently unavailable.
        </p>
        <a href="/destinations" className="px-6 py-3 bg-primary text-white rounded-full">
          Back to Destinations
        </a>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <DynamicHeroSection
        galleryKey={`place-${place.slug}`}
        fallbackTitle={place.title}
        fallbackImage={place.image}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/destinations" className="hover:text-primary transition-colors">Destinations</a>
          {place.destination && (
            <>
              <span>/</span>
              <a
                href={`/destinations/${place.destination.slug}`}
                className="hover:text-primary transition-colors"
              >
                {place.destination.title}
              </a>
            </>
          )}
          <span>/</span>
          <span className="text-foreground font-medium">{place.title}</span>
        </nav>
      </div>

      {/* Content Section */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                <MapPin size={18} />
                <span className="uppercase tracking-widest text-sm">
                  {place.destination ? place.destination.title : 'Destination'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-foreground">
                {place.title}
              </h1>
              <div className="w-20 h-1.5 bg-primary mb-8" />
            </div>

            <div
              className="prose prose-lg max-w-none text-muted-foreground leading-relaxed text-justify space-y-6 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
              dangerouslySetInnerHTML={{
                __html: formatHtmlContent(place.description || ''),
              }}
            />

            {/* Map embed */}
            {place.map && (
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm mt-6">
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: place.map }}
                />
              </div>
            )}
          </div>

          {/* Right Column: CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-700" />

                <h3 className="text-2xl font-bold mb-4 relative z-10">Plan a Visit</h3>
                <p className="text-muted-foreground mb-8 relative z-10 leading-relaxed text-left">
                  Interested in visiting {place.title}? Get in touch with our travel experts to craft your perfect itinerary.
                </p>

                <form className="space-y-4 relative z-10">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-3 rounded-xl bg-muted border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3 rounded-xl bg-muted border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <textarea
                    placeholder="Tell us about your interests..."
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl bg-muted border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                    <span>Inquire Now</span>
                    <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>

              {place.destination && (
                <Link
                  href={`/destinations/${place.destination.slug}`}
                  className="flex items-center gap-3 p-5 bg-muted/50 rounded-2xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <ArrowLeft size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Back to</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {place.destination.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Activities Section */}
        {place.activities && place.activities.length > 0 && (
          <div className="max-w-7xl mx-auto mt-8">
            <div className="space-y-10">
              {/* Header */}
              <div className="border-b border-border pb-8">
                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <CheckCircle size={18} />
                  <span className="uppercase tracking-widest text-sm">What To Do</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Activities in {place.title}
                </h2>
                <p className="text-muted-foreground mt-2">
                  Discover curated experiences available at this place.
                </p>
              </div>

              {/* Activities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {place.activities.map((activity) => (
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
                          <span>{place.title}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
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
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

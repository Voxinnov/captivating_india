import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import DestinationPlaces from '@/components/destination-places'
import { Theme } from '@/lib/themes'
import { CheckCircle, MapPin, Send } from 'lucide-react'
import { Metadata } from 'next'
import { formatHtmlContent } from '@/lib/utils'

// Needed for static export with dynamic segment
export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/destinations`)
    if (response.ok) {
      const json = await response.json()
      return (json.data || []).map((dest: Theme) => ({
        slug: dest.slug,
      }))
    }
  } catch (error) {
    console.error('Failed to generate static params for destinations:', error)
  }
  return []
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  let destination: Theme | null = null

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/destinations/${slug}`)
    if (response.ok) {
      const json = await response.json()
      destination = json.data
    }
  } catch (error) {
    console.error('Failed to fetch metadata for destination:', error)
  }

  return {
    title: destination ? `${destination.title} - Captivating India` : 'Destination Not Found',
    description: destination?.description || 'Explore our curated destinations.',
  }
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let destination: Theme | null = null

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/destinations/${slug}`, {
      next: { revalidate: 3600 },
    })
    if (response.ok) {
      const json = await response.json()
      destination = json.data
    }
  } catch (error) {
    console.error('Failed to fetch destination details:', error)
  }

  if (!destination) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
        <Navigation />
        <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
        <p className="text-muted-foreground mb-8">The destination you're looking for doesn't exist or is currently unavailable.</p>
        <a href="/destinations" className="px-6 py-3 bg-primary text-white rounded-full">Back to Destinations</a>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <DynamicHeroSection
        galleryKey={`theme-${destination.slug}`}
        fallbackTitle={destination.title}
        fallbackImage={destination.image}
      />

      {/* Content Section */}
      <section className="py-20 px-4">
        {/* Top Content: 2-column grid inside max-w-6xl */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                <MapPin size={18} />
                <span className="uppercase tracking-widest text-sm">Curated Destination</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-foreground">
                {destination.title}
              </h1>
              <div className="w-20 h-1.5 bg-primary mb-8" />
            </div>

            <div
              className="prose prose-lg max-w-none text-muted-foreground leading-relaxed text-justify space-y-6 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
              dangerouslySetInnerHTML={{
                __html: formatHtmlContent(destination.long_description || destination.description),
              }}
            />

            {destination.highlights && destination.highlights.length > 0 && (
              <div className="bg-muted/50 rounded-3xl p-8 md:p-10 border border-primary/10 shadow-sm mt-10">
                <h3 className="text-2xl font-semibold mb-6">Experience Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                      <span className="text-foreground leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-700"></div>
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">Start Your Journey</h3>
                <p className="text-muted-foreground mb-8 relative z-10 leading-relaxed text-left">
                  Inspired by the {destination.title} destination? Get in touch with our travel experts to craft your personalized itinerary.
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
                  ></textarea>
                  <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                    <span>Inquire Now</span>
                    <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm italic text-muted-foreground text-center">
                  "Each journey is carefully crafted to ensure you experience the soul of India."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content: Places Grid */}
        {destination.places && destination.places.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <DestinationPlaces
              places={destination.places}
              destinationTitle={destination.title}
            />
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

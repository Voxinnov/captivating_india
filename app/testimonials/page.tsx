'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'

type Testimonial = {
  id: number
  name: string
  location: string
  text: string
  trip: string
  rating: number
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://captivationgindia.bvox.in'}/api/v1/testimonials`)
        if (response.ok) {
          const result = await response.json()
          setTestimonials(result.data || [])
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/odishatribaltourkeralatravelagent-8565.jpg')" }}
        />

        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-center">
              Testimonials
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-center">Guest Feedback</h2>
          <div className="space-y-6 text-sm md:text-base text-muted-foreground text-justify">
            <p>
              In the years that we have been in operation we have been fortunate to have many clients travel with us.
              Our service record is something we are deeply proud of, with excellent feedback from almost everyone who
              has travelled with Captivating India.
            </p>
            <p>
              Most of our guests come to us through recommendations and often return for repeat journeys across India.
              Below is a selection of comments from our travellers:
            </p>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 bg-muted animate-pulse rounded-lg" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-muted/50 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex text-primary">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{testimonial.trip}</span>
                    </div>
                    <blockquote className="italic text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="pt-2 border-t border-muted/30 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground/70">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {testimonials.length === 0 && !isLoading && (
              <p className="text-center italic py-10">No testimonials found.</p>
            )}

            <p className="pt-8">
              For guests who would like to speak with someone who has travelled with us before, we are happy to provide
              references. Our aim is to offer every discerning traveller an outstanding holiday experience.
            </p>
          </div>
        </div>
      </section>

      <AboutLinksSection current="testimonials" />

      <Footer />
    </main>
  )
}



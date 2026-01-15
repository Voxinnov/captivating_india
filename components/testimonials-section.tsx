'use client'

import { useEffect, useState } from 'react'

type Testimonial = {
  name: string
  location: string
  text: string
  trip: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah & James',
    location: 'London, UK',
    text: 'Our Kerala houseboat cruise and South India tour were flawlessly organised. Every transfer, guide and hotel felt handpicked with real care.',
    trip: 'Highlights of Kerala & South India',
  },
  {
    name: 'Michael R.',
    location: 'Manchester, UK',
    text: 'From tea plantations to tranquil backwaters, Captivating India designed a bespoke itinerary that perfectly matched our pace and interests.',
    trip: 'Custom Kerala & Tamil Nadu Journey',
  },
  {
    name: 'Emma & Family',
    location: 'Bristol, UK',
    text: 'We felt looked after from the moment we landed. Safe driver, knowledgeable local guides and unforgettable experiences for the whole family.',
    trip: 'Family Holiday in Kerala',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 9000)

    return () => clearInterval(timer)
  }, [])

  const active = testimonials[index]

  return (
    <section
      id="testimonials"
      className="relative py-12 md:py-16 px-4 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/rithudmc-keralabackwaters-kumarakom-9085.jpg')",
      }}
    >
      {/* dark overlay over background image */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/60" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-8 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-2">
            GUEST EXPERIENCES
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
            What our guests say
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/80 text-justify md:text-center">
            Real stories from travellers who explored South India with Captivating India – carefully
            crafted journeys, warm hospitality and seamless support throughout their holiday.
          </p>
        </div>

        {/* Glass card on top of full-width background */}
        <div className="relative rounded-3xl border border-white/12 bg-white/8 backdrop-blur-xl px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="absolute -top-24 -right-10 h-40 w-40 rounded-full bg-primary/35 blur-3xl opacity-60" />
          <div className="absolute bottom-0 -left-10 h-36 w-36 rounded-full bg-primary/25 blur-3xl opacity-60" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-primary text-2xl">
                  “
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/70">
                    Captivating Journeys
                  </span>
                  <span className="text-xs text-white/60">
                    Curated holidays across Kerala & South India
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-1 text-xs text-white/70">
                <span className="text-sm font-semibold text-white">4.9 / 5</span>
                <span>Guest rating</span>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-white text-justify md:text-center">
              {active.text}
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-xs md:text-sm font-semibold text-white">
                  CI
                </div>
                <div className="flex flex-col">
                  <p className="text-sm md:text-base font-medium text-white">
                    {active.name}
                  </p>
                  <p className="text-xs md:text-sm text-white/70">
                    {active.location} · {active.trip}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                <div className="flex gap-1">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`Show testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-white/70">
                  Guest {index + 1} / {testimonials.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



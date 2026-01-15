'use client'

import { useEffect, useRef, useState } from 'react'

export default function DestinationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const destinations = [
    {
      title: 'Kerala',
      image: '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
      description: 'An essential Kerala Holiday could include going on a backwaters cruises in Alleppey, homestays in...',
    },
    {
      title: 'South India',
      image: '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
      description: 'South India comprises of the states of Kerala, Tamil Nadu, Andhra Pradesh, Karnataka, Goa and...',
    },
    {
      title: 'Odisha formerly called Orissa',
      image: '/images/odishatribaltourkeralatravelagent-8565.jpg',
      description: 'India\'s best kept secret: Odisha has finally thrown open its gates to the discerning and mindful...',
    },
    {
      title: 'North India',
      image: '/images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
      description: 'Northern India is the soul enriching cultural heartland of the subcontinent, the home of the Vedic...',
    },
  ]

  const featuredDestinations = destinations.slice(0, 4)
  const extraDestinations = destinations.slice(4)

  return (
    <section ref={sectionRef} id="destinations" className="py-12 md:py-16 px-4 bg-muted/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Explore</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">DESTINATIONS</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Mobile: full destinations as horizontal scroll */}
        <div className="md:hidden -mx-4">
          <div className="flex gap-4 overflow-x-auto pb-2 px-4 scrollbar-hide">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 min-w-[260px]"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={dest.image || '/placeholder.svg'}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4">
                        <span className="text-primary font-bold text-base">{idx + 1}</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                        {dest.title}
                      </h3>
                      <p className="text-white/90 font-light mb-4 leading-relaxed text-sm line-clamp-3 text-justify">
                        {dest.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 group-hover:gap-3 shadow-lg"
                      >
                        <span>Explore</span>
                        <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: grid + scroll strip for extra destinations */}
        <div className="hidden md:block">
          {/* First row: up to 4 featured destinations in 2 x 2 grid */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {featuredDestinations.map((dest, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : idx % 2 === 0
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                }`}
                style={{
                  transitionDelay: `${idx * 150}ms`,
                  animationDelay: `${idx * 150}ms`,
                }}
              >
                {/* Image Container */}
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <img
                    src={dest.image || '/placeholder.svg'}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <div className="relative z-10">
                      {/* Number Badge */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                        <span className="text-primary font-bold text-lg">{idx + 1}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                        {dest.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 font-light mb-6 leading-relaxed text-base md:text-lg max-w-md group-hover:text-white transition-colors duration-300 text-justify">
                        {dest.description}
                      </p>

                      {/* CTA Button */}
                      <a
                        href="#"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group-hover:gap-4 shadow-lg"
                      >
                        <span>Explore</span>
                        <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </a>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row: any additional destinations in a horizontal scroll strip */}
          {extraDestinations.length > 0 && (
            <div className="mt-6 -mx-4 md:mx-0">
              <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-2 px-4 md:px-0 scrollbar-hide">
                {extraDestinations.map((dest, idx) => {
                  const overallIndex = featuredDestinations.length + idx
                  return (
                    <div
                      key={overallIndex}
                      className="group relative overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 min-w-[260px] md:min-w-[320px]"
                    >
                      <div className="relative h-72 md:h-80 overflow-hidden">
                        <img
                          src={dest.image || '/placeholder.svg'}
                          alt={dest.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4">
                              <span className="text-primary font-bold text-base">
                                {overallIndex + 1}
                              </span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                              {dest.title}
                            </h3>
                            <p className="text-white/90 font-light mb-4 leading-relaxed text-sm md:text-base line-clamp-3 text-justify">
                              {dest.description}
                            </p>
                            <a
                              href="#"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 group-hover:gap-3 shadow-lg"
                            >
                              <span>Explore</span>
                              <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-300">
                                →
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

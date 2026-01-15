'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HOTELS } from '@/lib/hotels'

export default function HotelsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const hotels = HOTELS

  // Number of items to show per slide
  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }

  const [itemsToShow, setItemsToShow] = useState(4)

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerView.desktop)
      } else if (window.innerWidth >= 768) {
        setItemsToShow(itemsPerView.tablet)
      } else {
        setItemsToShow(itemsPerView.mobile)
      }
    }

    updateItemsToShow()
    window.addEventListener('resize', updateItemsToShow)
    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [])

  const totalSlides = Math.ceil(hotels.length / itemsToShow)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
      }, 4000) // Change slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  return (
    <section 
      id="hotels" 
      className="py-20 md:py-32 px-4 bg-muted/30 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Tourism Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 animate-gradient-shift"></div>
        
        {/* Tourism-themed Floating Bubbles */}
        <div className="absolute top-10 left-5 w-32 h-32 bg-primary/15 rounded-full border-2 border-primary/20 animate-bubble-float-1"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/12 rounded-full border-2 border-primary/15 animate-bubble-float-2"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-primary/10 rounded-full border-2 border-primary/20 animate-bubble-float-3"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/18 rounded-full border-2 border-primary/25 animate-bubble-float-4"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-primary/12 rounded-full border-2 border-primary/18 animate-bubble-float-5"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-primary/15 rounded-full border-2 border-primary/20 animate-bubble-float-6"></div>
        
        {/* Concentric Circle Bubbles */}
        <div className="absolute top-20 right-10 w-48 h-48 animate-bubble-float-7">
          <div className="absolute inset-0 rounded-full border-2 border-primary/15"></div>
          <div className="absolute inset-4 rounded-full border border-primary/10"></div>
        </div>
        <div className="absolute bottom-40 left-10 w-44 h-44 animate-bubble-float-8">
          <div className="absolute inset-0 rounded-full border-2 border-primary/12"></div>
          <div className="absolute inset-4 rounded-full border border-primary/8"></div>
        </div>
        
        {/* Large Background Bubbles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float-slow-reverse"></div>
        
        {/* Tourism Icons (Subtle) */}
        <div className="absolute top-24 right-1/4 text-primary/10 animate-icon-float-1" style={{ fontSize: '3rem' }}>🏝️</div>
        <div className="absolute bottom-32 left-1/4 text-primary/8 animate-icon-float-2" style={{ fontSize: '2.5rem' }}>🚤</div>
        <div className="absolute top-1/2 right-10 text-primary/10 animate-icon-float-3" style={{ fontSize: '2rem' }}>🌴</div>
        <div className="absolute bottom-24 right-1/3 text-primary/8 animate-icon-float-4" style={{ fontSize: '2.5rem' }}>✈️</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">HOTELS</h2>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2"
                >
                  {hotels
                    .slice(slideIndex * itemsToShow, slideIndex * itemsToShow + itemsToShow)
                    .map((hotel, idx) => (
                      <div 
                        key={idx} 
                        className="bg-card rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-muted hover:-translate-y-2"
                      >
                        <div className="relative h-56 md:h-64 overflow-hidden bg-muted">
                          <img
                            src={hotel.image || "/placeholder.jpg"}
                            alt={hotel.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {hotel.name}
                          </h3>
                          <p className="text-xs text-primary font-medium mb-3">{hotel.location}</p>
                          <p className="text-sm text-muted-foreground font-light mb-4 leading-relaxed line-clamp-3 text-justify">
                            {hotel.description}
                          </p>
                          <Link
                            href={`/hotels/${hotel.slug}`}
                            className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                          >
                            View Details
                            <span className="text-base transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-primary'
                    : 'w-2 h-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

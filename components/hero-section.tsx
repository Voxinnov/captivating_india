'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      image: '/images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
      title: 'Experience India',
      subtitle: 'All Seasons',
      description: 'Discover authentic travel experiences across Kerala and India with Captivating India, your trusted travel partner'
    },
    {
      image: '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
      title: 'Kerala Backwaters',
      subtitle: 'Serene Beauty',
      description: 'Experience the tranquil backwaters of Kerala, where nature meets tradition in perfect harmony'
    },
    {
      image: '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
      title: 'Adventure Awaits',
      subtitle: 'Explore Treks',
      description: 'Embark on unforgettable treks and discover the breathtaking landscapes of South India'
    },
    {
      image: '/images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
      title: 'Luxury Stays',
      subtitle: 'Premium Hotels',
      description: 'Indulge in world-class hospitality at our carefully selected luxury properties across India'
    },
    {
      image: '/images/29-05-2021-12-37-36-Mararikulam---1.jpg',
      title: 'Coastal Paradise',
      subtitle: 'Beautiful Beaches',
      description: 'Relax on pristine beaches and enjoy the coastal charm of Kerala and South India'
    },
  ]

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }, 5000) // Change slide every 5 seconds
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
  }, [isPaused, slides.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const currentSlide = slides[currentIndex]

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Background Images */}
      <div className="absolute inset-0 bg-muted">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = '/placeholder.jpg'
              }}
            />
          </div>
        ))}
      </div>

      {/* Social Media Icons - Left Side */}
      <div className="absolute left-4 md:left-8 bottom-20 md:bottom-24 z-20 flex flex-col gap-2">
        <a 
          href="#" 
          className="group relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
          title="Flickr"
        >
          <span className="text-white text-xs font-semibold">F</span>
          <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Flickr
          </span>
        </a>
        <a 
          href="#" 
          className="group relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
          title="Vimeo"
        >
          <span className="text-white text-xs font-semibold">V</span>
          <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Vimeo
          </span>
        </a>
        <a 
          href="#" 
          className="group relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
          title="Facebook"
        >
          <span className="text-white text-xs font-semibold">f</span>
          <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Facebook
          </span>
        </a>
        <a 
          href="#" 
          className="group relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
          title="Instagram"
        >
          <span className="text-white text-xs font-semibold">in</span>
          <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Instagram
          </span>
        </a>
        <a 
          href="#" 
          className="group relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
          title="Google Review"
        >
          <span className="text-white text-xs font-semibold">G+</span>
          <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Google Review
          </span>
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="transition-all duration-700 ease-in-out">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight leading-tight">
            {currentSlide.title}
            <br />
            <span className="text-primary">{currentSlide.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 opacity-95 max-w-2xl mx-auto text-justify">
            {currentSlide.description}
          </p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

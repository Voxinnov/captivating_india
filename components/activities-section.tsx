'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function ActivitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const images = [
    '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
    '/images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
    '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
    '/images/29-05-2021-12-37-36-Mararikulam---1.jpg',
    '/images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
    '/images/odishatribaltourkeralatravelagent-8565.jpg',
  ]

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000) // Change image every 10 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length])

  const currentImage = images[currentIndex]

  return (
    <section id="activities" className="relative py-12 md:py-16 px-4 bg-background overflow-hidden">
      {/* Background Image - Auto Changing */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-20 z-0' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Box */}
          <div className="bg-black/70 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white tracking-tight">Activities</h2>
            <p className="text-lg text-white/90 font-light leading-relaxed mb-6 text-justify">
              Looking for an experiential journey, exploring the unexplored and getting off the beaten trail? We have a portfolio of experience just for you that are original, specially curated by our team of experts that lets you have an in depth experience of the local way of life and the area that you visit. It could be looking for a cultural experience in...
            </p>
            <Link
              href="/activities"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-light hover:opacity-90 transition-opacity"
            >
              Read More
            </Link>
          </div>

          {/* Image - Auto Changing */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Activity ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.jpg'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

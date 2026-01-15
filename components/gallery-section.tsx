'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const imageGallery = [
  { title: 'Highlights of South India', image: '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg' },
  { title: 'Highlights of Treks and Camps', image: '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg' },
  { title: 'Activities in South India', image: '/images/29-05-2021-12-37-36-Mararikulam---1.jpg' },
  { title: 'Birds of South India', image: '/images/rithudmc-keralabackwaters-kumarakom-2808.jpg' },
  { title: 'Periyar Forest Bungalow@Pachakanam', image: '/images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg' },
  { title: 'Temples of South India', image: '/images/13-08-2025-16-55-26-Taj Fateh Prakash.jpg' },
  { title: 'Beaches of South India', image: '/images/29-05-2021-12-37-36-Mararikulam---1.jpg' },
  { title: 'Streets, Markets and People', image: '/images/rithu-dmc-about-1430.jpg' },
  { title: 'Wildlife in South India', image: '/images/odishatribaltourkeralatravelagent-8565.jpg' },
  { title: 'HIGHLIGHTS OF KERALA', image: '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg' },
]

const videoGallery = [
  {
    title: 'Backwaters Cruise Experience',
    image: '/images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
    duration: '3:20',
  },
  {
    title: 'Tea & Trekking Trails',
    image: '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
    duration: '4:05',
  },
  {
    title: 'Temples & Heritage Walks',
    image: '/images/13-08-2025-16-55-26-Taj Fateh Prakash.jpg',
    duration: '2:45',
  },
  {
    title: 'Beaches of South India',
    image: '/images/29-05-2021-12-37-36-Mararikulam---1.jpg',
    duration: '3:55',
  },
]

export default function GallerySection() {
  const [imageIndex, setImageIndex] = useState(0)
  const [videoIndex, setVideoIndex] = useState(0)

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % imageGallery.length)
    }, 8000)

    const videoTimer = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videoGallery.length)
    }, 8000)

    return () => {
      clearInterval(imageTimer)
      clearInterval(videoTimer)
    }
  }, [])

  const mainImage = imageGallery[imageIndex]
  const mainVideo = videoGallery[videoIndex]

  return (
    <section
      id="gallery"
      className="py-12 md:py-16 px-4 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">GALLERY</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl md:text-3xl font-light tracking-tight">Image Gallery</h3>
            </div>
            <div className="relative group overflow-hidden rounded-lg h-56 md:h-72 cursor-pointer border border-muted/70 bg-card">
              <img
                src={mainImage.image || '/placeholder.jpg'}
                alt={mainImage.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent group-hover:from-black/90 transition-all flex items-end p-4">
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <p className="text-white font-light text-sm md:text-base leading-tight line-clamp-2">
                    {mainImage.title}
                  </p>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white text-xs md:text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    View More Photos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Video Gallery */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl md:text-3xl font-light tracking-tight">Video Gallery</h3>
            </div>
            <div className="relative group overflow-hidden rounded-lg h-56 md:h-72 cursor-pointer border border-muted/70 bg-card">
              <img
                src={mainVideo.image || '/placeholder.jpg'}
                alt={mainVideo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                  <span className="ml-0.5 text-primary text-base md:text-lg">&#9658;</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-white font-light text-sm md:text-base leading-tight line-clamp-2">
                    {mainVideo.title}
                  </p>
                  <span className="px-2 py-0.5 rounded-full bg-black/80 text-[10px] md:text-xs text-white">
                    {mainVideo.duration}
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white text-xs md:text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  View More Videos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

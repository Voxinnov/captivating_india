'use client'

import { useState } from 'react'

type GalleryGridProps = {
  title: string
  images: string[]
}

export default function GalleryGrid({ title, images }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = () => setActiveIndex(null)

  return (
    <>
      <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-4 md:p-6">
        <h2 className="text-base md:text-lg font-semibold text-foreground mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, idx) => (
            <button
              key={`${src}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="relative group overflow-hidden rounded-xl border border-border/60 bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <img
                src={src || '/placeholder.jpg'}
                alt={`${title} ${idx + 1}`}
                className="h-28 md:h-32 lg:h-40 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-2 right-2 z-10 rounded-full bg-black/70 text-white px-3 py-1 text-xs md:text-sm hover:bg-black/90"
            >
              Close
            </button>
            <img
              src={images[activeIndex] || '/placeholder.jpg'}
              alt={`${title} ${activeIndex + 1}`}
              className="w-full h-full max-h-[90vh] object-contain transition-transform duration-500"
            />
          </div>
        </div>
      )}
    </>
  )
}





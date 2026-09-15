'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { THEMES, Theme } from '@/lib/themes'
import { stripHtml } from '@/lib/utils'

export default function AttractiveThemesGrid() {
  const [themes, setThemes] = useState<Theme[]>(THEMES)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/destinations`)
        if (response.ok) {
          const data = await response.json()
          if (data.data && data.data.length > 0) {
            setThemes(data.data)
          }
        }
      } catch (error) {
        console.error('Failed to fetch themes:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchThemes()
  }, [])

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {themes.map((theme, idx) => (
            <div
              key={theme.id}
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={theme.image || '/placeholder.jpg'}
                  alt={theme.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
              </div>



              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {theme.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-6 line-clamp-3 text-justify">
                    {stripHtml(theme.description)}
                  </p>

                  <Link
                    href={`/themes/${theme.slug}/`}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:bg-primary/90 transition-all duration-300 group/btn"
                  >
                    <span>View Journey</span>
                    <ArrowRight size={18} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

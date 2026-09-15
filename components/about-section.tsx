'use client'

import { useEffect, useState } from 'react'

interface AboutSectionData {
  title: string
  description: string
  meta_tags: string | null
}

export default function AboutSection() {
  const [data, setData] = useState<AboutSectionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-sections?key=about`)
        if (response.ok) {
          const result = await response.json()
          setData(result)
        }
      } catch (error) {
        console.error('Failed to fetch homepage about section:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAboutData()
  }, [])

  // Helper to extract first 2 paragraphs from HTML content
  const getFirstTwoParagraphs = (html: string): string => {
    if (typeof window === 'undefined') return html
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const body = doc.body
      
      const children = Array.from(body.children).filter((el) => el.textContent?.trim())
      if (children.length > 2) {
        const container = doc.createElement('div')
        container.appendChild(children[0].cloneNode(true))
        container.appendChild(children[1].cloneNode(true))
        return container.innerHTML
      }
    } catch (e) {
      console.error('Failed to parse paragraphs:', e)
    }
    return html
  }

  return (
    <section id="about" className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          {loading ? (
            <div className="max-w-4xl mx-auto space-y-4 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          ) : data ? (
            <div className="max-w-4xl mx-auto about-section-content">
              <style>{`
                .about-section-content * {
                  background-color: transparent !important;
                  background: transparent !important;
                }
              `}</style>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight uppercase">
                {data.title}
              </h2>
              <div
                className="text-lg text-muted-foreground font-light leading-relaxed mb-4 text-justify prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: getFirstTwoParagraphs(data.description) }}
              />
              <a
                href="/about"
                className="inline-block mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full font-light hover:opacity-90 transition-opacity"
              >
                Read More
              </a>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">ABOUT US</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-4 text-justify">
                What started as an inspiration of a group of travel professionals to fill a huge gap in the Indian market for a reliable ground operator for holidays, Captivating India is now one of Kerala's leading Travel Agent. We believe in showing you our country all around the year as there is something or the other that will fascinate you. Our name "Captivating India" reflects our commitment to showcasing the captivating beauty, culture, and experiences that India has to offer throughout all seasons.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed text-justify">
                A holiday with us will let you experience the real India without having to worry about the details. Our team of experienced travel professionals ensures that every journey is carefully crafted to match your unique preferences and interests.
              </p>
              <a
                href="/about"
                className="inline-block mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full font-light hover:opacity-90 transition-opacity"
              >
                Read More
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

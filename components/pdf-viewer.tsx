'use client'

import React, { useEffect, useRef, useState } from 'react'

interface PdfViewerProps {
  url: string
  title?: string
}

export default function PdfViewer({ url, title }: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [numPages, setNumPages] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadPdf = async () => {
      try {
        setLoading(true)
        setError(null)

        // Load PDF.js from CDN if not already loaded
        if (!(window as any).pdfjsLib) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script')
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
            script.async = true
            script.onload = () => {
              const pdfjs = (window as any).pdfjsLib
              if (pdfjs) {
                pdfjs.GlobalWorkerOptions.workerSrc =
                  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
                resolve()
              } else {
                reject(new Error('PDF.js failed to initialize'))
              }
            }
            script.onerror = () => reject(new Error('Failed to load PDF library'))
            document.head.appendChild(script)
          })
        } else {
          const pdfjs = (window as any).pdfjsLib
          if (!pdfjs.GlobalWorkerOptions.workerSrc) {
            pdfjs.GlobalWorkerOptions.workerSrc =
              'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
          }
        }

        const pdfjs = (window as any).pdfjsLib
        const loadingTask = pdfjs.getDocument(url)
        const pdf = await loadingTask.promise

        if (!isMounted) return
        setNumPages(pdf.numPages)
        setLoading(false)

        // Render all pages
        const container = containerRef.current
        if (!container) return
        container.innerHTML = '' // clear any previous canvases

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum)
          if (!isMounted) return

          // High-DPI scale (e.g., 2.0 or window.devicePixelRatio)
          const pixelRatio = typeof window !== 'undefined' ? Math.max(window.devicePixelRatio || 1, 2) : 2
          const unscaledViewport = page.getViewport({ scale: 1.0 })
          const scale = pixelRatio * 1.5
          const viewport = page.getViewport({ scale })

          const pageWrapper = document.createElement('div')
          pageWrapper.className = 'w-full max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-sm border border-border/40 overflow-hidden'

          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width
          canvas.style.width = '100%'
          canvas.style.height = 'auto'
          canvas.style.display = 'block'

          pageWrapper.appendChild(canvas)
          container.appendChild(pageWrapper)

          if (context) {
            await page.render({
              canvasContext: context,
              viewport: viewport,
            }).promise
          }
        }
      } catch (err: any) {
        console.error('Error rendering PDF:', err)
        if (isMounted) {
          setError(err.message || 'Failed to render PDF')
          setLoading(false)
        }
      }
    }

    loadPdf()

    return () => {
      isMounted = false
    }
  }, [url])

  return (
    <div className="w-full">
      {loading && (
        <div className="flex flex-col items-center justify-center py-16 space-y-4">
          <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Loading itinerary document...</p>
        </div>
      )}

      {error && (
        <div className="w-full text-center py-12 bg-card rounded-xl border border-border/60 p-6 space-y-4">
          <p className="text-sm text-destructive">Could not load the PDF document in browser.</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
          >
            Download / View PDF Directly
          </a>
        </div>
      )}

      <div ref={containerRef} className="w-full" />
    </div>
  )
}

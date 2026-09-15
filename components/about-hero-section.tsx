'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
    id: number
    image: string
    title: string | null
    order: number
}

export default function AboutHeroSection() {
    const [slides, setSlides] = useState<Slide[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/about-galleries?key=about-gallery`)
                if (response.ok) {
                    const data = await response.json()
                    if (Array.isArray(data) && data.length > 0) {
                        setSlides(data)
                    }
                }
            } catch (error) {
                console.error('Failed to fetch about gallery slides:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchSlides()
    }, [])

    useEffect(() => {
        if (!isPaused && slides.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
            }, 5000)
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

    if (isLoading) {
        return (
            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-muted">
                <div className="animate-pulse w-full h-full bg-gray-200" />
            </section>
        )
    }

    if (slides.length === 0) {
        // Fallback if no slides found
        return (
            <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/rithudmc-keralabackwaters-kumarakom-9085.jpg')" }}
                />
                <div className="relative w-full py-20 md:py-28 lg:py-32">
                    <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-center">
                            About Us
                        </h1>
                    </div>
                </div>
            </section>
        )
    }

    const currentSlide = slides[currentIndex]

    return (
        <section
            className="relative w-full h-[60vh] min-h-[400px] md:h-screen flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel Background Images */}
            <div className="absolute inset-0 bg-muted">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title || 'About Image'}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = '/placeholder.jpg'
                            }}
                        />
                        {/* Overlay for better text visibility if needed, though original didn't have one explicitly, the image might be dark enough */}
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
                <>
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
                </>
            )}

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <div className="transition-all duration-700 ease-in-out">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight drop-shadow-md">
                        {currentSlide.title || 'About Us'}
                    </h1>
                </div>
            </div>

            {/* Dots Indicator */}
            {slides.length > 1 && (
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-8 h-2 bg-white'
                                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

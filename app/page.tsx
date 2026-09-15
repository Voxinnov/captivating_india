import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TestimonialsSection from '@/components/testimonials-section'
import ToursSection from '@/components/tours-section'
import HotelsSection from '@/components/hotels-section'
import ActivitiesSection from '@/components/activities-section'
import GallerySection from '@/components/gallery-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ToursSection />
      <HotelsSection />
      <ActivitiesSection />
      <GallerySection />
      <Footer />
    </main>
  )
}

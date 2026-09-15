'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'
import DynamicHeroSection from '@/components/dynamic-hero-section'

export default function WhyTravelWithUsPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <DynamicHeroSection
        galleryKey="travel-with-us-gallery"
        fallbackTitle="Why Travel With Us"
        fallbackImage="/images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg"
      />

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-center">Why Travel With Us</h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground text-justify">
            <p>
              A Captivating India holiday helps you experience the real India without worrying about organisational
              detail. Your journey is infused with the true flavour of India through its great diversity and closer
              contact with local people.
            </p>
            <p>
              Our tours typically include the major sites and monuments, countryside and villages, perhaps a wildlife
              reserve and time to relax at a beach or mountain resort. You can tailor this balance to suit your needs.
              The experience is enhanced by a variety of accommodation, modes of transport and, where possible, local
              cultural events.
            </p>
            <p>
              Commitment to high standards and specialist knowledge, coupled with our passion for India, ensures
              quality holidays of distinction. Many of our guests consider their time with us one of the best holidays
              they have ever taken.
            </p>
            <p>
              We take you to busy bazaars and colourful markets, to villages where craftspeople practise ancient skills,
              into schools with wide‑eyed children and into local family homes where you may experience their lifestyle
              and even join them for a traditional meal.
            </p>
            <p>
              You stay in a carefully chosen mix of luxury hotels, boutique properties, heritage homes and characterful
              retreats. Our selection is based on comfort, quality of service and the personality of each property, with
              the benefit of detailed research and guest feedback.
            </p>
            <p className="font-medium">
              Why travel with Captivating India:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Enjoy high quality of service at competitive prices compared with similar holidays elsewhere.</li>
              <li>
                Work with a team that understands both Western expectations and Indian hospitality, able to design the
                perfect holiday around your requirements.
              </li>
              <li>Have any problems dealt with swiftly and efficiently, with 24×7 on‑call support.</li>
              <li>
                Benefit from access to lesser‑known sights, restaurants and events through our ongoing on‑the‑ground
                research.
              </li>
              <li>
                Have a dedicated member of our team assigned to your holiday to ensure every detail is understood and
                delivered.
              </li>
              <li>Travel with well‑trained drivers and well‑maintained vehicles for a safe, memorable journey.</li>
            </ul>
            <p>
              Backed by first‑hand local knowledge, attention to detail and flawless arrangements, a Captivating India
              holiday is designed to be the holiday of a lifetime.
            </p>
          </div>
        </div>
      </section>

      <AboutLinksSection current="why" />

      <Footer />
    </main>
  )
}



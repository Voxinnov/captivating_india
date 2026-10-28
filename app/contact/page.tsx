import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import ContactForm from '@/components/contact-form'

async function getSettings() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://captivationgindia.bvox.in'}/api/v1/settings`, { cache: 'no-store' })
    const json = await res.json()
    return json.data || {}
  } catch (error) {
    console.error('Failed to fetch settings:', error)
    return {}
  }
}

export default async function ContactPage() {
  const settings = await getSettings()

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <DynamicHeroSection
        galleryKey="contact-gallery"
        fallbackTitle="Plan Your Inspiring Journey"
        fallbackImage="/images/rithudmc-keralabackwaters-kumarakom-2808.jpg"
      />

      {/* Contact content – inspired by https://www.travelagentinkerala.com/contact.php */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6 text-sm md:text-base text-muted-foreground">
            <p className="text-justify leading-relaxed">
              It is our attempt to introduce you to India and help you understand our people, culture and
              customs first‑hand. Be it a village visit, a rickshaw ride through the by‑lanes and old market
              towns, visiting a local family, learning an ancient art or dance form, or searching for an
              endangered species in one of the many national parks – we try to make your holiday an inspiring
              experience.
            </p>
            <p className="text-justify leading-relaxed">
              To suggest an itinerary that best suits your interests, budget and preferred pace, please complete
              the form below as accurately as possible. One of our travel specialists will then be in touch with
              ideas and a no‑obligation quote.
            </p>

            <ContactForm />
          </div>

          {/* Contact info column */}
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <div className="bg-card rounded-2xl border border-border/70 shadow-sm p-5 md:p-6 space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground">Contact Info</h3>
              <p className="text-xs md:text-sm whitespace-pre-line">
                {settings.contact_address || 'Honiton Devon UK'}
              </p>
              <p className="text-xs md:text-sm">
                Website:{' '}
                <a
                  href={settings.website_url || "https://captivatingindia.co.uk/"}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {(settings.website_url || 'https://captivatingindia.co.uk/').replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </a>
              </p>
              <p className="text-xs md:text-sm">
                Email:{' '}
                <a
                  href={`mailto:${settings.contact_email || 'info@captivatingindia.co.uk'}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {settings.contact_email || 'info@captivatingindia.co.uk'}
                </a>
                <br />
                Phone: {settings.contact_phone || '+91 484 2664107'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}





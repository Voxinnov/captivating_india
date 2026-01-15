import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'

export default function ServicesPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/29-05-2021-12-37-36-Mararikulam---1.jpg')" }}
        />

        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-center">
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-center">Services</h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground text-justify">
            <p>
              A holiday with Captivating India lets you experience the real India without having to worry about the
              organisational details. You can rest assured that you will have an experience to cherish.
            </p>
            <p>
              Our itineraries typically include, in addition to the major monuments at the various places, a closer look
              at the local way of life. We offer both regular holidays and tailor‑made trips with an emphasis on places
              off the beaten track, jungle safaris and real travel experiences in addition to cultural tours.
            </p>
            <p>
              It is our attempt to introduce the real India and help you understand its people, culture and customs,
              first‑hand. Be it a village visit, a rickshaw ride through the by‑lanes and old markets, staying with
              local families, learning an ancient art or dance form or searching for an endangered species in one of the
              many wildlife sanctuaries or national parks – we try to make your holiday an inspiring experience.
            </p>
            <p>
              The network of our own and associate offices throughout the country and excellent relations with hotels
              and transport partners ensure consistently high standards of holiday at competitive prices. All aspects of
              your holiday will be organised before you arrive and you can be sure of impeccable service after you
              arrive.
            </p>
            <p>
              A dedicated member of our team will be on call 24×7 during your holiday to ensure the smooth running of
              every arrangement. Your personal tour manager is available throughout your journey, because we know how
              important your holiday is to you – it is just as important to us.
            </p>
            <p>
              Join us on this journey of discovery. Nobody shows our country quite like we do. For arranging a holiday
              or just friendly advice, write to{' '}
              <a
                href="mailto:info@captivatingindia.co.uk"
                className="text-primary underline-offset-4 hover:underline"
              >
                info@captivatingindia.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <AboutLinksSection current="services" />

      <Footer />
    </main>
  )
}



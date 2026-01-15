import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'

export default function AboutPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section
        className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]"
      >
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

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-center">About Us</h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground text-justify">
            <p>
              What started as an inspiration of a group of travel professionals to fill a huge gap in the Indian
              market for a reliable ground operator for holidays, Captivating India is now one of Kerala&apos;s
              leading travel agents. The idea behind the brand is simple – to reveal the different &ldquo;seasons&rdquo; and
              moods of India, all through the year.
            </p>
            <p>
              A holiday with us will let you experience the real India without having to worry about the organisational
              details. You can rest assured that you will have an experience to cherish. Our itineraries typically
              include, in addition to the major monuments at the various places, a closer look at the local way of
              life.
            </p>
            <p>
              We offer both regular holidays and tailor‑made trips with an emphasis on places off the beaten track,
              jungle safaris and real travel experiences in addition to the cultural tours. Whatever your interests
              might be, our team has the knowledge and experience to create just the holiday you are looking for.
            </p>
            <p>
              It is our attempt to introduce you to India and help you understand its people, culture and customs,
              first‑hand. Be it a village visit, a rickshaw ride through the by‑lanes and old markets, staying with
              local families, learning an ancient art or dance form or searching for an endangered species in one of
              the many wildlife sanctuaries or national parks – we try to make your holiday an inspiring experience.
            </p>
            <p>
              For more details, an obligation‑free quote or just a friendly chat, you can always email us at{' '}
              <a
                href="mailto:info@captivatingindia.co.uk"
                className="text-primary underline-offset-4 hover:underline"
              >
                info@captivatingindia.co.uk
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Tiles section – The Team, Services, Why Travel With Us, etc. */}
      <AboutLinksSection current="about" />

      <Footer />
    </main>
  )
}



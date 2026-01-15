import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'

export default function TeamPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rithu-dmc-about-1430.jpg')" }}
        />

        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-center">
              The Team
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-center">The Team</h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground text-justify">
            <p>
              Looking for the best tour operator in Kerala? Look no further. Captivating India is a destination
              management company based in the historic port city of Kochi with pan‑India operations. Our team consists
              of seasoned travel professionals who manage our head office in Cochin.
            </p>
            <p>
              Our offices are manned by local staff who are well trained and are aware of their responsibility to the
              community and environment. Wherever possible we work with small concerns and individuals so that most of
              your holiday cost is dispersed directly into the community.
            </p>
            <p>
              We involve local communities wherever possible, as their involvement – however small it may be – leaves a
              lasting impression of the places you visit and the experiences you have. All of us are well travelled and
              regularly visit the places that we promote to ensure that standards remain consistently high.
            </p>
            <p>
              Our own and associate offices throughout the country, along with excellent relationships with hotels and
              transport partners, ensure consistently high standards of holiday at competitive prices.
            </p>
            <p>
              Contact us for arranging a holiday or for just friendly advice – we are here to help. Our aim is to offer
              the discerning traveller an outstanding holiday experience. For more details or for an obligation‑free
              quote, contact{' '}
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

      <AboutLinksSection current="team" />

      <Footer />
    </main>
  )
}



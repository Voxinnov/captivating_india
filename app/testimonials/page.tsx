import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'

export default function TestimonialsPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/odishatribaltourkeralatravelagent-8565.jpg')" }}
        />

        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-center">
              Testimonials
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-center">Testimonials</h2>
          <div className="space-y-6 text-sm md:text-base text-muted-foreground text-justify">
            <p>
              In the years that we have been in operation we have been fortunate to have many clients travel with us.
              Our service record is something we are deeply proud of, with excellent feedback from almost everyone who
              has travelled with Captivating India.
            </p>
            <p>
              Most of our guests come to us through recommendations and often return for repeat journeys across India.
              Below is a selection of comments adapted from our travellers:
            </p>

            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary/70 pl-4 italic text-justify">
                Our family recently had a wonderful tour of Kerala organised by Captivating India. The quality of their
                service was excellent throughout – from advising on the itinerary, arranging drivers and transfers,
                sourcing very good accommodation and always being available to answer questions and provide the personal
                touch.
              </blockquote>
              <p className="text-xs md:text-sm text-right text-muted-foreground">— Hayes family</p>
            </div>

            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary/70 pl-4 italic text-justify">
                I have been travelling with this team for many years now and would never think of arranging my holidays
                to India with anyone else. All the arrangements are always immaculate and I have never had any
                hiccups. Most importantly, these are people who love India, know India and want their clients to learn
                to love the country too.
              </blockquote>
              <p className="text-xs md:text-sm text-right text-muted-foreground">— Kate D.</p>
            </div>

            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary/70 pl-4 italic text-justify">
                Travelling with Captivating India was such a joy – everything was made easy for us in this fascinating
                country. Their choice of hotels and modes of transport was perfect. We shall return!
              </blockquote>
              <p className="text-xs md:text-sm text-right text-muted-foreground">— Mrs Richards</p>
            </div>

            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary/70 pl-4 italic text-justify">
                We have travelled with the team for many years and are still constantly amazed by beautiful India and
                her people. No two trips are the same – it is always a new and exciting adventure. Captivating India
                really understand what you want, and we have loved every minute of our travels with them.
              </blockquote>
              <p className="text-xs md:text-sm text-right text-muted-foreground">— Long‑standing guests</p>
            </div>

            <p>
              For guests who would like to speak with someone who has travelled with us before, we are happy to provide
              references. Our aim is to offer every discerning traveller an outstanding holiday experience.
            </p>
          </div>
        </div>
      </section>

      <AboutLinksSection current="testimonials" />

      <Footer />
    </main>
  )
}



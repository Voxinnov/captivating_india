import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { TOURS } from '@/lib/tours'

export default function ToursPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[260px] md:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rithudmc-keralabackwaters-kumarakom-9085.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
              Tours
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Tours &amp; Holiday Ideas
            </h2>
          </div>
        </div>
      </section>

      {/* Intro + tour cards – inspired by https://textiletours.co.uk/tours */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-10 text-sm md:text-base text-muted-foreground">
          <div className="space-y-4 text-justify leading-relaxed">
            <p>
              South India, with its rich history, diverse traditions and vibrant artisan communities,
              offers a unique and immersive journey for travellers interested in culture, crafts and
              landscapes. A carefully designed tour is not just a showcase of monuments and scenery,
              but a deep dive into living traditions, temple architecture, cuisine and daily life.
            </p>
            <p>
              The tours below are examples of what is possible. They may not match your exact
              requirements, but we specialise in creating tailor‑made journeys that fit your interests,
              pace and travel dates. With experienced consultants in the UK and a dedicated team in
              India to manage your arrangements, you can look forward to a hassle‑free and thoroughly
              enjoyable holiday.
            </p>
            <p>
              Do contact us at{' '}
              <a
                href="mailto:info@captivatingindia.co.uk"
                className="text-primary underline-offset-4 hover:underline"
              >
                info@captivatingindia.co.uk
              </a>{' '}
              for an obligation‑free quote or to arrange a call back.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TOURS.map((tour) => (
              <article
                key={tour.slug}
                className="bg-card rounded-2xl border border-border/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div
                  className="h-40 md:h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url('${tour.image || '/placeholder.jpg'}')` }}
                />
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-[11px] uppercase tracking-wide text-primary font-semibold mb-1">
                    {tour.region}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground text-justify leading-relaxed mb-4">
                    {tour.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



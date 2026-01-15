import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { HOTELS } from '@/lib/hotels'
import { notFound } from 'next/navigation'

type HotelDetailPageProps = {
  // In Next 16, params is a Promise in RSC routes
  params: Promise<{
    slug: string
  }>
}

// Needed for static export with dynamic segment
export function generateStaticParams() {
  return HOTELS.map((hotel) => ({
    slug: hotel.slug,
  }))
}

export default async function HotelDetailPage({ params }: HotelDetailPageProps) {
  const { slug } = await params
  const hotel = HOTELS.find((h) => h.slug === slug)

  if (!hotel) {
    notFound()
  }

  const titleWithLocation = `${hotel.name}, ${hotel.location}`

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[260px] md:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${hotel.image || '/placeholder.jpg'}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
              Hotel
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              {titleWithLocation}
            </h2>
          </div>
        </div>
      </section>

      {/* Main details content – modelled on https://www.travelagentinkerala.com/hotel_dtls.php?g_id=6 */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-5xl mx-auto space-y-10 text-sm md:text-base text-muted-foreground">
          <div className="space-y-4 text-justify leading-relaxed">
            {(hotel.longDescription || hotel.description)
              .split('\n')
              .filter(Boolean)
              .map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
          </div>

          {hotel.opinion && (
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground">Our Opinion</h3>
              <p className="italic text-justify">{hotel.opinion}</p>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-foreground">Gallery</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              A curated image gallery for this hotel can be added here, similar to the gallery
              section on the original hotels site.
            </p>
          </div>

          {/* Contact info similar to reference site footer */}
          <div className="pt-4 border-t border-border/60 text-center text-xs md:text-sm text-muted-foreground space-y-1">
            <p className="font-medium">
              20/3 B, P.A Ulahan Road, Maradu P.O, Cochin - 682304
            </p>
            <p>
              Website:{' '}
              <a
                href="https://www.rithudmc.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                www.rithudmc.com
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:info@rithudmc.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                info@rithudmc.com
              </a>{' '}
              &nbsp; | &nbsp; Phone: +91 484 2664107
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



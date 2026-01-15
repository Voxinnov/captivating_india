import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { TOURS } from '@/lib/tours'
import { notFound } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type TourDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

// Needed for static export with dynamic segment
export function generateStaticParams() {
  return TOURS.map((tour) => ({
    slug: tour.slug,
  }))
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params
  const tour = TOURS.find((t) => t.slug === slug)

  if (!tour) {
    notFound()
  }

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[260px] md:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${tour.image || '/placeholder.jpg'}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/70">
              Tour
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              {tour.title}
            </h1>
            <p className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
              {tour.region}
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed content – like https://textiletours.co.uk/tourdetails/3 */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto text-sm md:text-base text-muted-foreground">
          <Tabs defaultValue="overview" className="gap-6">
            <TabsList className="mb-6 flex flex-wrap">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="map">Map</TabsTrigger>
              <TabsTrigger value="more">More</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="leading-relaxed">
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-6 md:p-8 space-y-4 text-justify">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-2">Overview</h2>
                {(tour.overview || tour.description)
                  .split('\n')
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="itinerary" className="leading-relaxed">
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-6 md:p-8 space-y-4">
                <h2 className="text-base md:text-lg font-semibold text-foreground text-center mb-4">
                  Itinerary
                </h2>
                {tour.itinerary && tour.itinerary.length > 0 ? (
                  <div className="space-y-2 text-justify">
                    {tour.itinerary.map((day) => (
                      <p key={day.slice(0, 40)}>{day}</p>
                    ))}
                  </div>
                ) : (
                  <p>Detailed day‑by‑day itinerary information can be provided on request.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="highlights" className="leading-relaxed">
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-6 md:p-8 space-y-4">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-3">Highlights</h2>
                {tour.highlights && tour.highlights.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {tour.highlights.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>Key highlights for this itinerary can be tailored around your personal interests.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="leading-relaxed">
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-6 md:p-8 space-y-6">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-2">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['/images/rithu-dmc-about-1430.jpg', '/images/rithudmc-keralabackwaters-kumarakom-2808.jpg', '/images/rithudmc-keralabackwaters-kumarakom-9085.jpg', '/images/29-05-2021-12-37-36-Mararikulam---1.jpg', '/images/odishatribaltourkeralatravelagent-8565.jpg', '/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg'].map(
                    (src) => (
                      <div key={src} className="overflow-hidden rounded-lg">
                        <img
                          src={src}
                          alt="Tour gallery"
                          className="h-32 md:h-40 w-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="map" className="leading-relaxed">
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-6 md:p-8 space-y-4">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-3">Map</h2>
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border/60 bg-muted flex items-center justify-center text-xs md:text-sm text-muted-foreground">
                  Map placeholder – a route map image or interactive map can be embedded here.
                </div>
              </div>
            </TabsContent>

            <TabsContent value="more" className="leading-relaxed">
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-6 md:p-8 space-y-4">
                <h2 className="text-base md:text-lg font-semibold text-foreground mb-2">More Info</h2>
                <p>
                  For pricing, exact dates and customisation options, please contact us at{' '}
                  <a
                    href="mailto:info@captivatingindia.co.uk"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    info@captivatingindia.co.uk
                  </a>
                  . We will be happy to adapt this itinerary to suit your pace, interests and preferred
                  style of accommodation.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}



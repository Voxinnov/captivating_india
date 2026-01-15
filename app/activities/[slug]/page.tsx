import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ACTIVITIES } from '@/lib/activities'
import { notFound } from 'next/navigation'

type ActivityDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

// Needed for static export with dynamic segment
export function generateStaticParams() {
  return ACTIVITIES.map((activity) => ({
    slug: activity.slug,
  }))
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { slug } = await params
  const activity = ACTIVITIES.find((a) => a.slug === slug)

  if (!activity) {
    notFound()
  }

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[260px] md:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${activity.image || '/placeholder.jpg'}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/70">
              Activity
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              {activity.title}
            </h1>
            <p className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
              {activity.destination}
            </p>
          </div>
        </div>
      </section>

      {/* Main details content – similar in spirit to activity.php */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-5xl mx-auto space-y-8 text-sm md:text-base text-muted-foreground">
          <div className="space-y-4 text-justify leading-relaxed">
            {(activity.longDescription || activity.description)
              .split('\n')
              .filter(Boolean)
              .map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
          </div>

          <p className="text-xs md:text-sm text-muted-foreground">
            This experience can be tailored to your wider itinerary and combined with other activities
            in the region. Our team will be happy to advise on timings, logistics and suitability for
            your party.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}





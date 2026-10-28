import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ACTIVITIES } from '@/lib/activities'
import { notFound } from 'next/navigation'
import { formatHtmlContent } from '@/lib/utils'
import { Metadata } from 'next'

type ActivityDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

// Needed for static export with dynamic segment
export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/activities`)
    if (response.ok) {
      const json = await response.json()
      if (json.data && json.data.length > 0) {
        return json.data.map((act: { slug: string }) => ({ slug: act.slug }))
      }
    }
  } catch (error) {
    console.error('Failed to generate static params for activities:', error)
  }

  return ACTIVITIES.map((activity) => ({
    slug: activity.slug,
  }))
}

async function getActivity(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/activities/${slug}`, {
      next: { revalidate: 300 },
    })
    if (response.ok) {
      const result = await response.json()
      if (result.data) {
        return result.data
      }
    }
  } catch (error) {
    console.error('Failed to fetch activity from API:', error)
  }

  const staticActivity = ACTIVITIES.find((a) => a.slug === slug)
  if (staticActivity) {
    return {
      ...staticActivity,
      gallery: [],
    }
  }

  return null
}

export async function generateMetadata({ params }: ActivityDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const activity = await getActivity(slug)

  return {
    title: activity ? `${activity.title} - Captivating India` : 'Activity Not Found',
    description: activity?.description || 'Explore our curated activities.',
  }
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { slug } = await params
  const activity = await getActivity(slug)

  if (!activity) {
    notFound()
  }

  const gallery: string[] = Array.isArray(activity.gallery)
    ? activity.gallery.map((img: string | { url: string }) => (typeof img === 'string' ? img : img.url))
    : []

  const destinationText = activity.destination || activity.theme || activity.location || ''

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero – tall banner matching other hero sections */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${activity.image || '/placeholder.jpg'}')` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/70">
              Activity
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              {activity.title}
            </h1>
            {destinationText && (
              <p className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
                {destinationText}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main details content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-5xl mx-auto space-y-10 text-sm md:text-base text-muted-foreground">
          <div
            className="space-y-4 text-justify leading-relaxed prose max-w-none text-muted-foreground [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
            dangerouslySetInnerHTML={{
              __html: formatHtmlContent(activity.longDescription || activity.long_description || activity.description),
            }}
          />

          {/* Gallery – displayed when images are available */}
          {gallery.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-border">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted shadow-sm hover:shadow-md transition-all group"
                  >
                    <img
                      src={src}
                      alt={`${activity.title} gallery image ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs md:text-sm text-muted-foreground border-t border-border/50 pt-6">
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





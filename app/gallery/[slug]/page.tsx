import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { notFound } from 'next/navigation'
import GalleryGrid from '@/components/gallery-grid'

async function getGalleryCategory(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/gallery/${slug}`, { next: { revalidate: 0 } })
    if (!res.ok) return null
    const json = await res.json()
    return json.data || null
  } catch (error) {
    console.error('Failed to fetch gallery category:', error)
    return null
  }
}

type GalleryDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const { slug } = await params
  const category = await getGalleryCategory(slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[220px] md:min-h-[260px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${category.coverImage || '/placeholder.jpg'}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative w-full py-14 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
              Gallery
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight">
              {category.title}
            </h2>
          </div>
        </div>
      </section>

      {/* Images grid with lightbox – like glry_dtl.php list view but modernised */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-6">
          <GalleryGrid title={category.title} images={category.images} />
        </div>
      </section>

      <Footer />
    </main>
  )
}





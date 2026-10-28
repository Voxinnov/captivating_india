import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import DynamicHeroSection from '@/components/dynamic-hero-section'
import Link from 'next/link'

async function getGalleryCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/gallery`, { next: { revalidate: 0 } })
    if (!res.ok) return []
    const json = await res.json()
    return json.data || []
  } catch (error) {
    console.error('Failed to fetch gallery categories:', error)
    return []
  }
}

export default async function GalleryPage() {
  const categories = await getGalleryCategories()

  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <DynamicHeroSection
        galleryKey="gallery-gallery"
        fallbackTitle="Image Gallery"
        fallbackImage="/images/rithudmc-keralabackwaters-kumarakom-9085.jpg"
      />

      {/* Category tiles – like the reference gallery grid */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category: any) => (
              <Link
                key={category.slug}
                href={`/gallery/${category.slug}`}
                className="group overflow-hidden rounded-xl bg-background shadow-sm hover:shadow-lg border border-border/70 transition-shadow"
              >
                <div className="relative h-40 md:h-44 lg:h-48 overflow-hidden">
                  <img
                    src={category.coverImage || '/placeholder.jpg'}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="bg-white px-3 md:px-4 py-2">
                  <p className="text-[11px] md:text-xs font-medium tracking-wide text-muted-foreground">
                    {category.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



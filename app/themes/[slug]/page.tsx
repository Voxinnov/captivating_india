import { redirect } from 'next/navigation'
import { Theme } from '@/lib/themes'

export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/v1/destinations`)
    if (response.ok) {
      const json = await response.json()
      return (json.data || []).map((dest: Theme) => ({
        slug: dest.slug,
      }))
    }
  } catch (error) {
    console.error('Failed to generate static params for themes redirect:', error)
  }
  return []
}

export default async function ThemesDetailRedirectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(`/destinations/${slug}`)
}

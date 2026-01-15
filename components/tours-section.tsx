import Link from 'next/link'

export default function ToursSection() {
  return (
    <section id="tours" className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">TOURS AND HOLIDAYS IDEAS</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-4 text-justify">
            We believe that individuals are unique and so are their requirements while on holiday. With our own experience while traveling around the country you can rest assured that you get the real experience that you are looking for. At Captivating India, we believe your holiday is not just about sight-seeing. People come to our shores expecting a wide variety from the many choices that our country has to offer. Whether you wish to travel in Kerala or anywhere in India do discuss your interests with us and have an unforgettable journey.
          </p>
          <div className="text-center">
            <Link
              href="/tours"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-light hover:opacity-90 transition-opacity"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

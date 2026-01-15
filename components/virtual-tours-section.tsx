export default function VirtualToursSection() {
  const tours = [
    { title: 'Cochin Island tour' },
    { title: 'Jungle Experience' },
    { title: 'Cochin Auto Tour' },
    { title: 'The Dosa Experience-Kerala' },
    { title: 'CGH Coconut Lagoon, Kumarakom' },
    { title: 'Textile Tour in Southern India' },
  ]

  return (
    <section id="virtual-tours" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">VIRTUAL TOUR</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg h-80 cursor-pointer border border-muted hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/placeholder.jpg"
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">{tour.title}</h3>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <p className="text-white/80 text-sm font-light">Experience Now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

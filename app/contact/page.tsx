import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[260px] md:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rithudmc-keralabackwaters-kumarakom-2808.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70">
              Contact Us
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Plan Your Inspiring Journey
            </h2>
          </div>
        </div>
      </section>

      {/* Contact content – inspired by https://www.travelagentinkerala.com/contact.php */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6 text-sm md:text-base text-muted-foreground">
            <p className="text-justify leading-relaxed">
              It is our attempt to introduce you to India and help you understand our people, culture and
              customs first‑hand. Be it a village visit, a rickshaw ride through the by‑lanes and old market
              towns, visiting a local family, learning an ancient art or dance form, or searching for an
              endangered species in one of the many national parks – we try to make your holiday an inspiring
              experience.
            </p>
            <p className="text-justify leading-relaxed">
              To suggest an itinerary that best suits your interests, budget and preferred pace, please complete
              the form below as accurately as possible. One of our travel specialists will then be in touch with
              ideas and a no‑obligation quote.
            </p>

            <form className="space-y-5 bg-card rounded-2xl border border-border/70 shadow-sm p-5 md:p-7">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">Booking enquiry</h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Title <span className="text-destructive">*</span>
                  </label>
                  <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select here</option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    First name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Surname <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Trip date <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Duration of holiday (nights) <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Number of people <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Number of rooms <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Type of accommodation <span className="text-destructive">*</span>
                  </label>
                  <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select here</option>
                    <option>Basic</option>
                    <option>Standard</option>
                    <option>First class</option>
                    <option>Homestay</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs md:text-sm font-medium text-foreground">
                  Your interests <span className="text-destructive">*</span>
                </label>
                <div className="grid md:grid-cols-3 gap-2 text-xs md:text-sm">
                  {[
                    'Culture',
                    'Wildlife',
                    'Photography',
                    'Markets',
                    'Treks and Walks',
                    'Cruises',
                    'Ayurveda & Yoga',
                    'Volunteer projects',
                    'Diving & Snorkelling',
                    'Adventure trips',
                    'Safaris',
                    'Cycle tours',
                  ].map((interest) => (
                    <label key={interest} className="inline-flex items-center gap-2">
                      <input type="checkbox" className="rounded border-border text-primary" />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Approximate budget per day (INR) <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">
                    Contact number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-foreground">Contact address</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs md:text-sm font-medium text-foreground">Any other requests</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-2.5 text-sm md:text-base font-medium text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact info column */}
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <div className="bg-card rounded-2xl border border-border/70 shadow-sm p-5 md:p-6 space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground">Contact Info</h3>
              <p className="text-xs md:text-sm">
                20/3 B, P.A Ulahan Road,
                <br />
                Maradu P.O, Cochin - 682304
              </p>
              <p className="text-xs md:text-sm">
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
              <p className="text-xs md:text-sm">
                Email:{' '}
                <a
                  href="mailto:info@rithudmc.com"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  info@rithudmc.com
                </a>
                <br />
                Phone: +91 484 2664107
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}





import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function PaymentPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[260px] md:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg')" }}
        />

        <div className="relative w-full py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight text-center">
              Make Your Payment
            </h1>
          </div>
        </div>
      </section>

      {/* Payment form – modelled on https://www.travelagentinkerala.com/payment.php */}
      <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3">
              Make Your Payment
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Please fill in the details below to proceed with your payment. All amounts are to be entered in
              Indian Rupees (INR). A 2.7% service charge applies for online payments, similar to the original
              payment form on{' '}
              <a
                href="https://www.travelagentinkerala.com/payment.php"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                travelagentinkerala.com
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl bg-card/80 shadow-lg border border-border/60 p-6 md:p-8">
            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Mobile / contact number"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Description <span className="text-destructive">*</span>
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Brief description of your tour / invoice reference"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Amount (only in INR) <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Amount in INR"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Amount deducted (incl. 2.7% service charge) <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Total amount to be charged"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Card Holder Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="As printed on the card"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-2.5 text-sm md:text-base font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>

          {/* Contact info block similar to reference */}
          <div className="text-center text-xs md:text-sm text-muted-foreground space-y-1">
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





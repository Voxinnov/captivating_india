import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'

export default function BookingAndPaymentPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg')" }}
        />

        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-center">
              Booking &amp; Payment
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-6 text-sm md:text-base text-muted-foreground text-justify">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2 text-center">
            Booking &amp; Payment
          </h2>

          <p>
            Payments for your Captivating India holiday can be made either by bank transfer or by credit/debit card.
            Prices are quoted in Indian Rupees (INR). We are happy to receive payment in any internationally acceptable
            currency and the holiday price will be converted using the exchange rate stipulated by the Reserve Bank of
            India on the date the payment is made.
          </p>
          <p>
            If you choose to transfer money directly to our account, please ensure that any bank charges are borne by
            you. We will credit the exact amount that we receive in our account; any shortfall or excess will be
            adjusted against your client account and collected or refunded as required. An additional surcharge may be
            applied for payment by credit card.
          </p>

          <h3 className="text-lg font-medium mt-4">Booking terms &amp; cancellation policy</h3>
          <p>
            A 25% advance is normally required to process your booking, with the balance payable at least 45 days prior
            to travel (60 days during peak periods). In some peak‑season cases a higher deposit or full advance may be
            required; we will advise this at the time of booking.
          </p>
          <p>
            Please note this is an advance payment only and not a refundable deposit. Refunds are processed based on our
            cancellation policy and the type of holiday booked. For flights, trains and pre‑booked safaris, tickets are
            often non‑refundable.
          </p>

          <h4 className="text-base font-semibold mt-2">Cancellation charges (guideline)</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>More than 60 days prior to travel: no retention other than minimal administration charges.</li>
            <li>60–45 days prior to start of the holiday: approximately 25% of the tour cost.</li>
            <li>45 days to one month prior: approximately 50% of the tour cost.</li>
            <li>One month or less prior: up to 100% of the tour cost.</li>
          </ul>

          <p>
            In the unlikely event that you need to cancel, we will always try our best to recover as much as possible
            from hotels and service providers and pass any refunds back to you after deducting administration charges.
          </p>
          <p>
            If you decide to postpone your trip after confirmation and it falls within the cancellation period, we will
            endeavour to credit the amount paid against a future trip, subject to using the same itinerary and hotels
            and their individual policies.
          </p>

          <p className="mt-4">
            For detailed booking and payment information tailored to your itinerary, our team will be happy to advise
            you. Please contact us at{' '}
            <a
              href="mailto:info@captivatingindia.co.uk"
              className="text-primary underline-offset-4 hover:underline"
            >
              info@captivatingindia.co.uk
            </a>
            .
          </p>

          {/* Pay Now button – opens internal payment form page */}
          <div className="pt-4 flex justify-center">
            <Link
              href="/payment"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-2.5 text-sm md:text-base font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Pay Now
            </Link>
          </div>
        </div>
      </section>

      <AboutLinksSection current="booking" />

      <Footer />
    </main>
  )
}



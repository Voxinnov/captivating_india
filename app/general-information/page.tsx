import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutLinksSection from '@/components/about-links-section'

export default function GeneralInformationPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[360px] md:min-h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rithudmc-keralabackwaters-kumarakom-9085.jpg')" }}
        />

        <div className="relative w-full py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight text-center">
              General Information
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 via-background to-muted/40">
        <div className="max-w-6xl mx-auto space-y-6 text-sm md:text-base text-muted-foreground text-justify">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2 text-center">
            General Information
          </h2>

          <p>
            When you book a holiday with Captivating India we ensure that your arrangements are clearly explained and
            aligned with your expectations. Below is an overview of what is typically included and excluded from our
            holidays, as well as some practical travel information.
          </p>

          <h3 className="text-lg font-medium mt-4">Inclusions</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Accommodation:</strong> Standard category rooms are booked unless you request otherwise. Superior
              rooms and suites can be arranged on request.
            </li>
            <li>
              <strong>Internal travel:</strong> Economy‑class flights where specified, appropriate train travel,
              exclusive boat cruises and private chauffeur‑driven cars. For longer road journeys, the driver&apos;s
              allowance for accommodation and meals is included.
            </li>
            <li>
              <strong>Sightseeing:</strong> Scheduled sightseeing with English‑speaking guides and entrance fees to
              listed monuments and sites, as per your itinerary.
            </li>
            <li>
              <strong>Wildlife viewing:</strong> Shared jeeps or larger open vehicles in game reserves accompanied by a
              naturalist. Exclusive use of vehicles can be arranged at additional cost where available.
            </li>
            <li>
              <strong>Trekking &amp; special activities:</strong> Where applicable, costs for guides, porters, camping
              equipment, environment fees and porter insurance are covered.
            </li>
            <li>
              <strong>Meals:</strong> As indicated in your detailed itinerary. Many holidays are based on bed &amp;
              breakfast, with full board in wildlife lodges and some remote locations.
            </li>
            <li>
              <strong>Transfers:</strong> Assisted transfers for all scheduled arrivals and departures using private
              vehicles or resort transfers as specified.
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Exclusions</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Camera and video charges at monuments and in wildlife reserves.</li>
            <li>Indian visa fees and any related processing costs.</li>
            <li>Meals not specified in your itinerary, drinks, laundry, telephone calls and personal shopping.</li>
            <li>Tips and gratuities; guidance on appropriate tipping is provided before travel.</li>
            <li>Any other services not specifically mentioned as included.</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Transport &amp; travelling within India</h3>
          <p>
            Choosing the right modes of transport is an important part of designing your holiday. We often recommend a
            mix of surface travel and flights so that you can enjoy varied landscapes without spending excessive time on
            the road.
          </p>
          <p>
            Our vehicles meet international safety standards and are driven by experienced chauffeurs who understand the
            needs of overseas guests. For train journeys we use the most appropriate class available for the route, and
            for internal flights we work with reputable carriers.
          </p>

          <p className="mt-4">
            For any questions about what is included in a particular itinerary or for more detailed general
            information, please contact us at{' '}
            <a
              href="mailto:info@captivatingindia.co.uk"
              className="text-primary underline-offset-4 hover:underline"
            >
              info@captivatingindia.co.uk
            </a>
            .
          </p>
        </div>
      </section>

      <AboutLinksSection current="general" />

      <Footer />
    </main>
  )
}



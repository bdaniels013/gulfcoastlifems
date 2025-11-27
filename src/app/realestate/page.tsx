import SectionTitle from "../components/SectionTitle"
import ListingCard from "../components/ListingCard"
import MetricCard from "../components/MetricCard"
import LeadForm from "../components/LeadForm"
import Reveal from "../components/Reveal"
import FilterBar from "../components/FilterBar"
import InlineEmailForm from "../components/InlineEmailForm"
import ValueEstimateForm from "../components/ValueEstimateForm"
import Parallax from "../components/Parallax"
import SectionNav from "../components/SectionNav"
import Image from "next/image"

export default function Page() {
  const listings = [
    { price: "$425,000", beds: 4, baths: 3, sqft: 2450, city: "Biloxi" },
    { price: "$289,000", beds: 3, baths: 2, sqft: 1750, city: "Gulfport" },
    { price: "$525,000", beds: 4, baths: 3, sqft: 3100, city: "Ocean Springs" },
    { price: "$199,000", beds: 2, baths: 2, sqft: 1250, city: "Long Beach" },
    { price: "$749,000", beds: 5, baths: 4, sqft: 3800, city: "Pass Christian" },
    { price: "$349,000", beds: 3, baths: 2, sqft: 1850, city: "Bay St. Louis" },
  ]

  const metrics = [
    { label: "Biloxi Median Price", value: "$285k" },
    { label: "New Listings This Week", value: "74" },
    { label: "Avg Days on Market", value: "31" },
    { label: "Ocean Springs Median Price", value: "$350k" },
  ]

  return (
    <div className="space-y-12">
      <div className="bg-navy text-white rounded-xl p-4 text-sm flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/c21-header.png" alt="CENTURY 21 J. Carter & Company" width={140} height={36} />
          <div className="font-serif hidden sm:block">CENTURY 21 J. Carter & Company</div>
        </div>
        <div className="flex items-center gap-4">
          <span>Office: <a href="tel:+12287313881" className="text-aqua">(228) 731-3881</a></span>
          <span>Direct: <a href="tel:+12282979775" className="text-aqua">(228) 297-9775</a></span>
        </div>
        <div>Mary “Lizzie” Fontenelle, Realtor®</div>
      </div>

      <Parallax intensity={0.08} className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/beau rivage sunset.jpg" alt="Beau Rivage at sunset" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        <div className="relative bg-gradient-to-br from-sand via-white to-aqua/20 p-10 md:p-16">
          <h1 className="text-3xl md:text-4xl font-serif text-navy">Search Mississippi Gulf Coast Homes</h1>
          <p className="mt-2 text-navy/70">Real-time listings powered by IDX (coming soon).</p>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-sand via-sand/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-sand via-sand/60 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-sand via-sand/60 to-transparent" />
      </Parallax>

      <Reveal>
      <section id="search" className="space-y-6">
        <SectionTitle title="Start Your Search" subtitle="Fine-tune the basics" />
        <div className="rounded-xl border border-sand bg-white p-4 shadow-sm">
          <form className="grid gap-3 md:grid-cols-5">
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2 md:col-span-2" placeholder="Location or city" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Min price" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Max price" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Beds" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Baths" />
            <button className="md:col-span-5 inline-flex justify-center rounded-full bg-navy text-white px-5 py-2 mt-2">Search</button>
          </form>
        </div>
      </section>
      </Reveal>

      <SectionNav items={[
        { label: "Search", href: "#search" },
        { label: "Featured", href: "#featured" },
        { label: "Snapshot", href: "#snapshot" },
        { label: "Alerts", href: "#alerts" },
        { label: "Lead", href: "#lead" },
      ]} />
      <FilterBar filters={["Waterfront","New Listings","Under $300k","Condos","Single Family","Golf Course"]} />

      <Reveal>
      <section id="featured" className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/os bridge.jpg" alt="Ocean Springs Bridge" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative p-6 md:p-8">
        <SectionTitle title="Featured Listings" subtitle="Sample listings ready for IDX integration" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, i) => (
            <ListingCard key={i} price={l.price} beds={l.beds} baths={l.baths} sqft={l.sqft} city={l.city} />
          ))}
        </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="snapshot" className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/willow tree.jpg" alt="Coastal willow" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative p-6 md:p-8">
        <SectionTitle title="Market Snapshot" subtitle="Fast metrics for smarter decisions" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} label={m.label} value={m.value} />
          ))}
        </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="alerts" className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/pass harbor boats.jpg" alt="Pass Christian Harbor" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative p-6 md:p-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-sand bg-white p-4 shadow-sm">
          <SectionTitle title="Get Instant Alerts" subtitle="Be the first to know" />
          <InlineEmailForm />
        </div>
        <div className="space-y-4 rounded-xl border border-sand bg-white p-4 shadow-sm">
          <SectionTitle title="Curious what your home is worth?" subtitle="Request a free value estimate" />
          <ValueEstimateForm />
        </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="lead" className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/biloxi beach waves.jpg" alt="Biloxi waves" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative p-6 md:p-8">
          <LeadForm cta="Get Custom Recommendations" />
        </div>
      </section>
      </Reveal>
    </div>
  )
}

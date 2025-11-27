import SectionTitle from "../components/SectionTitle"
import ListingCard from "../components/ListingCard"
import MetricCard from "../components/MetricCard"
import LeadForm from "../components/LeadForm"
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
        <div>Office: (000) 000-0000</div>
        <div>Mary “Lizzie” Fontenelle, Realtor®</div>
      </div>

      <section className="space-y-6">
        <SectionTitle title="Search Mississippi Gulf Coast Homes" subtitle="Real-time listings powered by IDX (coming soon)" />
        <div className="rounded-xl border border-sand bg-white p-4 shadow-sm">
          <form className="grid gap-3 md:grid-cols-5">
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2 md:col-span-2" placeholder="Location or city" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Min price" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Max price" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Beds" />
            <input className="rounded-md border border-sand bg-sand/50 px-3 py-2" placeholder="Baths" />
            <button className="md:col-span-5 inline-flex justify-center rounded-full bg-navy text-white px-5 py-2 mt-2">Search</button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Waterfront",
              "New Listings",
              "Under $300k",
              "Condos",
              "Single Family",
              "Golf Course",
            ].map((f) => (
              <button key={f} className="rounded-full border border-sand bg-sand/50 px-4 py-2 text-sm hover:bg-sand">{f}</button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title="Featured Listings" subtitle="Sample listings ready for IDX integration" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, i) => (
            <ListingCard key={i} price={l.price} beds={l.beds} baths={l.baths} sqft={l.sqft} city={l.city} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Market Snapshot" subtitle="Fast metrics for smarter decisions" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} label={m.label} value={m.value} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <SectionTitle title="Get Instant Alerts" subtitle="Be the first to know" />
          <form action="#" className="flex gap-2">
            <input type="email" placeholder="Email" className="flex-1 rounded-md border border-sand bg-white px-4 py-3" />
            <button className="rounded-full bg-aqua text-white px-5 py-3">Subscribe</button>
          </form>
        </div>
        <div className="space-y-4">
          <SectionTitle title="Curious what your home is worth?" subtitle="Request a free value estimate" />
          <form action="#" className="grid gap-3">
            <input placeholder="Address" className="rounded-md border border-sand bg-white px-4 py-3" />
            <input placeholder="Email" className="rounded-md border border-sand bg-white px-4 py-3" />
            <button className="rounded-full bg-gold text-white px-5 py-3">Request Estimate</button>
          </form>
        </div>
      </section>

      <section>
        <LeadForm cta="Get Custom Recommendations" />
      </section>
    </div>
  )
}

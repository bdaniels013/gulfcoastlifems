import Hero from "./components/Hero"
import SectionTitle from "./components/SectionTitle"
import CityCard from "./components/CityCard"
import GuideCard from "./components/GuideCard"
import LifestyleCard from "./components/LifestyleCard"
import LeadForm from "./components/LeadForm"
import Image from "next/image"

export default function Page() {
  const cities = [
    { city: "Gulfport", blurb: "Beaches, harbors, and vibrant neighborhoods." },
    { city: "Biloxi", blurb: "Historic charm and coastal culture." },
    { city: "Ocean Springs", blurb: "Art, food, and walkable downtown." },
    { city: "Long Beach", blurb: "Relaxed living with great schools." },
    { city: "Pass Christian", blurb: "Luxury waterfront and scenic views." },
    { city: "Bay St. Louis", blurb: "Quaint Old Town and festivals." },
  ]

  const guides = [
    { title: "First-Time Buyer Guide", blurb: "Steps to buying on the Gulf Coast." },
    { title: "Selling on the Gulf Coast", blurb: "Maximize value and timing." },
    { title: "Closing Costs 101", blurb: "What to expect in Mississippi." },
  ]

  const lifestyle = [
    { title: "Beaches", blurb: "Miles of sand, calm waters, and sunsets." },
    { title: "Food", blurb: "Seafood classics and local favorites." },
    { title: "Events & Festivals", blurb: "Parades, music, and community fun." },
  ]

  return (
    <div className="space-y-16">
      <Hero />

      <section>
        <SectionTitle title="Meet Lizzie" subtitle="Local expert, friendly guide, and your Gulf Coast Realtor®" />
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-1 relative h-56 rounded-2xl overflow-hidden">
            <Image src="/lizzie-headshot.jpg" alt="Mary “Lizzie” Fontenelle headshot" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-navy/80">Mary “Lizzie” Fontenelle helps buyers and sellers across the Mississippi Gulf Coast with a modern, approachable style. She blends local knowledge with data-driven guidance to make each move confident and enjoyable.</p>
            <ul className="grid gap-2 text-navy/70">
              <li>Gulf Coast local and community-focused</li>
              <li>Century 21 agent</li>
              <li>Guides buyers and sellers across the MS Gulf Coast</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title="Discover the Mississippi Gulf Coast" subtitle="Explore top areas and neighborhoods" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <CityCard key={c.city} city={c.city} blurb={c.blurb} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Real Estate 101" subtitle="Guides and resources for confident decisions" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.title} title={g.title} blurb={g.blurb} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Lifestyle & Gulf Coast Living" subtitle="Beaches, food, events, and everyday joy" />
        <div className="grid gap-6 md:grid-cols-3">
          {lifestyle.map((l) => (
            <LifestyleCard key={l.title} title={l.title} blurb={l.blurb} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Get the Gulf Coast Buyer Guide" subtitle="Tell us what you’re looking for" />
        <LeadForm cta="Get Custom Home Recommendations" />
      </section>
    </div>
  )
}

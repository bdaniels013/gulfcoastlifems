import Hero from "./components/Hero"
import SectionTitle from "./components/SectionTitle"
import CityCard from "./components/CityCard"
import GuideCard from "./components/GuideCard"
import LifestyleCard from "./components/LifestyleCard"
import LeadForm from "./components/LeadForm"
import Image from "next/image"
import Badge from "./components/Badge"
import ContactCard from "./components/ContactCard"
import Reveal from "./components/Reveal"
import Separator from "./components/Separator"
import { AwardIcon, ShieldIcon } from "./components/icons"
import ScrollRow from "./components/ScrollRow"

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

      <Reveal>
      <section>
        <SectionTitle title="Meet Lizzie" subtitle="Local expert, friendly guide, and your Gulf Coast Realtor®" />
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-1 relative h-56 rounded-2xl overflow-hidden">
            <Image src="/lizzie-headshot.jpg" alt="Mary “Lizzie” Fontenelle headshot" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-gold font-serif">Invest In Yourself & Your Future</p>
            <p className="text-navy/80">Lizzie Fontenelle combines years of buying and selling real estate, her passion to help others, and extensive local knowledge to guide you home. Whether you are choosing your first home, second home, vacation home, first commercial investment, an office complex, strip mall or land investment for future development, Lizzie is your best advocate. She is available anywhere in South Mississippi; from Louisiana&apos;s state line to Alabama&apos;s state line. Lizzie is selling South Mississippi!</p>
            <ul className="grid gap-2 text-navy/70">
              <li>Gulf Coast local and community-focused</li>
              <li>Century 21 agent</li>
              <li>Guides buyers and sellers across the MS Gulf Coast</li>
              <li>Mobile: <a href="tel:+12282979775" className="text-aqua">(228) 297-9775</a></li>
            </ul>
          </div>
        </div>
      </section>
      </Reveal>

      <Separator />

      <Reveal>
      <section>
        <SectionTitle title="Awards & Recognition" subtitle="Consistency, service, and results" />
        <div className="flex flex-wrap gap-2">
          {[
            "2024 — Quality Service Pinnacle Producer",
            "2023 — Quality Service Pinnacle Producer",
            "2022 — Quality Service Producer",
            "2021 — CENTURION®",
          ].map((a) => (
            <Badge key={a} label={a} variant="accent" icon={<AwardIcon className="h-3.5 w-3.5" />} />
          ))}
        </div>
      </section>
      </Reveal>

      <Separator />

      <Reveal>
      <section>
        <SectionTitle title="Professional Designations" subtitle="Training and expertise you can trust" />
        <div className="flex flex-wrap gap-2">
          {[
            "NAR Commitment to Excellence",
            "Accredited Buyer Representative Manager",
            "Fine Homes and Estates Specialist",
            "Military Network Specialist",
          ].map((d) => (
            <Badge key={d} label={d} icon={<ShieldIcon className="h-3.5 w-3.5" />} />
          ))}
        </div>
      </section>
      </Reveal>

      <Separator />

      <Reveal>
      <section>
        <SectionTitle title="Contact & Office" subtitle="Reach out anytime" />
        <ContactCard />
      </section>
      </Reveal>

      <Reveal>
      <section>
        <SectionTitle title="Discover the Mississippi Gulf Coast" subtitle="Explore top areas and neighborhoods" />
        <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <CityCard key={c.city} city={c.city} blurb={c.blurb} />
          ))}
        </div>
        <div className="md:hidden">
          <ScrollRow items={cities.map((c) => (
            <CityCard key={c.city} city={c.city} blurb={c.blurb} />
          ))} />
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section>
        <SectionTitle title="Real Estate 101" subtitle="Guides and resources for confident decisions" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.title} title={g.title} blurb={g.blurb} />
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section>
        <SectionTitle title="Lifestyle & Gulf Coast Living" subtitle="Beaches, food, events, and everyday joy" />
        <div className="grid gap-6 md:grid-cols-3">
          {lifestyle.map((l) => (
            <LifestyleCard key={l.title} title={l.title} blurb={l.blurb} />
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section>
        <SectionTitle title="Get the Gulf Coast Buyer Guide" subtitle="Tell us what you’re looking for" />
        <LeadForm cta="Get Custom Home Recommendations" />
      </section>
      </Reveal>
    </div>
  )
}

import Link from "next/link"
import Badge from "./Badge"
import Parallax from "./Parallax"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl ring-1 ring-sand/60">
      <div className="absolute inset-0">
        <Image src="/biloxi beach sunset.jpg" alt="Biloxi beach at sunset" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-white/50" />
      </div>
      <Parallax intensity={0.06} className="bg-gradient-to-br from-aqua/20 via-sand to-gold/20 p-10 md:p-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-navy">Gulf Coast Life MS</h1>
          <p className="mt-3 text-lg text-navy/80">Learn, live, and invest along the Mississippi Gulf Coast with Mary “Lizzie” Fontenelle.</p>
          <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/realestate" className="inline-flex rounded-full bg-navy text-white px-5 py-3 hover:bg-navy/90">Search Homes</Link>
          <a href="#contact" className="inline-flex rounded-full bg-aqua text-white px-5 py-3 hover:bg-aqua/80">Book a Call</a>
          <a href="tel:+12282979775" className="inline-flex rounded-full border border-aqua text-aqua px-5 py-3 hover:bg-aqua/10">Call (228) 297-9775</a>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge label="Local Expert" />
          <Badge label="Century 21" />
          <Badge label="Coastal Living" />
        </div>
      </div>
      </Parallax>
    </section>
  )
}

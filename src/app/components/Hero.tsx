import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aqua/20 via-sand to-gold/20 p-10 md:p-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-navy">Gulf Coast Life Real Estate</h1>
        <p className="mt-3 text-lg text-navy/80">Learn, live, and invest along the Mississippi Gulf Coast with Mary “Lizzie” Fontenelle.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/realestate" className="inline-flex rounded-full bg-navy text-white px-5 py-3 hover:bg-navy/90">Search Homes</Link>
          <a href="#contact" className="inline-flex rounded-full bg-aqua text-white px-5 py-3 hover:bg-aqua/80">Book a Call</a>
        </div>
      </div>
    </section>
  )
}

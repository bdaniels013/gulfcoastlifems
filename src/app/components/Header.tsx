import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-sand sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Gulf Coast Life logo" width={36} height={36} className="rounded-full" />
          <span className="text-2xl font-serif tracking-wide text-navy">Gulf Coast Life</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-navy/80 hover:text-navy">Home</Link>
          <Link href="/realestate" className="text-navy/80 hover:text-navy">Real Estate</Link>
          <Link href="#" className="text-navy/80 hover:text-navy">Explore the Coast</Link>
          <Link href="#" className="text-navy/80 hover:text-navy">Guides</Link>
          <Link href="#contact" className="inline-flex items-center rounded-full bg-gold/90 text-white px-4 py-2 hover:bg-gold">Contact</Link>
          <a href="tel:+12282979775" className="text-aqua hover:text-navy">(228) 297-9775</a>
        </nav>
      </div>
    </header>
  )
}

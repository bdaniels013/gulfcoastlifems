"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header className={`bg-white/80 backdrop-blur border-b border-sand sticky top-0 z-50 ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image src="/logo.jpeg" alt="Gulf Coast Life logo" width={36} height={36} className="rounded-full" />
          <span className="text-2xl font-serif tracking-wide text-navy">Gulf Coast Life</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <Link href="/" className="text-navy/80 hover:text-navy">Home</Link>
          <Link href="/realestate" className="text-navy/80 hover:text-navy">Real Estate</Link>
          <Link href="/#explore" className="text-navy/80 hover:text-navy">Explore the Coast</Link>
          <Link href="/#guides" className="text-navy/80 hover:text-navy">Guides</Link>
          <Link href="#contact" className="inline-flex items-center rounded-full bg-gold/90 text-white px-4 py-2 hover:bg-gold">Contact</Link>
          <a href="tel:+12282979775" className="text-aqua hover:text-navy">(228) 297-9775</a>
        </nav>
        <button onClick={() => setOpen(true)} className="md:hidden inline-flex items-center rounded-md border border-sand px-3 py-2 text-navy" aria-label="Open menu">Menu</button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur z-50">
          <div className="container py-6">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-serif text-navy">Menu</div>
              <button onClick={() => setOpen(false)} className="rounded-md border border-sand px-3 py-2" aria-label="Close menu">Close</button>
            </div>
            <div className="mt-6 grid gap-4">
              <Link href="/" onClick={() => setOpen(false)} className="text-navy">Home</Link>
              <Link href="/realestate" onClick={() => setOpen(false)} className="text-navy">Real Estate</Link>
              <a href="#" className="text-navy">Explore the Coast</a>
              <a href="#" className="text-navy">Guides</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-gold/90 text-white px-4 py-2">Contact</a>
              <a href="tel:+12282979775" className="text-aqua">Call (228) 297-9775</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

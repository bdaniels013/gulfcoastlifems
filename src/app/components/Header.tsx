"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HomeIcon, WaveIcon } from "./icons"

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
        <div className="md:hidden fixed inset-0 z-50" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-gradient-to-br from-sand/60 via-white to-gold/60" />
          <div className="relative px-4 py-6">
            <div className="max-w-md mx-auto rounded-2xl border border-sand bg-white shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-serif text-navy">Menu</div>
                <button onClick={() => setOpen(false)} className="rounded-md border border-sand px-3 py-2" aria-label="Close menu">Close</button>
              </div>
              <div className="mt-6 grid gap-3">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-navy px-4 py-3 rounded-md border border-sand bg-white shadow-sm">
                  <HomeIcon className="h-4 w-4" /> Home
                </Link>
                <Link href="/realestate" onClick={() => setOpen(false)} className="flex items-center gap-2 text-navy px-4 py-3 rounded-md border border-sand bg-white shadow-sm">
                  <HomeIcon className="h-4 w-4" /> Real Estate
                </Link>
                <Link href="/#explore" onClick={() => setOpen(false)} className="flex items-center gap-2 text-navy px-4 py-3 rounded-md border border-sand bg-white shadow-sm">
                  <WaveIcon className="h-4 w-4" /> Explore the Coast
                </Link>
                <Link href="/#guides" onClick={() => setOpen(false)} className="flex items-center gap-2 text-navy px-4 py-3 rounded-md border border-sand bg-white shadow-sm">
                  <HomeIcon className="h-4 w-4" /> Guides
                </Link>
                <a href="#contact" className="block text-center rounded-full bg-gold/90 text-white px-5 py-3">Contact</a>
                <a href="tel:+12282979775" className="block text-center text-aqua px-4 py-3 rounded-md border border-sand bg-white shadow-sm">Call (228) 297-9775</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

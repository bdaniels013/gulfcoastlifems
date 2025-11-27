"use client"
import { useEffect, useState } from "react"

type Item = { label: string; href: string }
export default function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.href || "")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    items.forEach(it => {
      const el = document.querySelector(it.href)
      if (!el) return
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(it.href)
        })
      }, { threshold: 0.6 })
      obs.observe(el)
      observers.push(obs)
    })
    return () => {
      observers.forEach(o => o.disconnect())
      window.removeEventListener("scroll", onScroll)
    }
  }, [items])

  return (
    <div className="sticky top-16 z-40">
      <nav aria-label="Section navigation" className={`rounded-full border bg-white/80 backdrop-blur px-2 py-2 flex flex-wrap gap-2 justify-center ${scrolled ? "shadow-sm border-sand" : "border-sand"}`}>
        {items.map(it => {
          const is = active === it.href
          return (
            <a key={it.href} href={it.href} className={`rounded-full px-4 py-2 text-sm border transition ${is ? "bg-navy text-white border-navy" : "bg-sand/50 text-navy border-sand hover:bg-sand"}`}>{it.label}</a>
          )
        })}
      </nav>
    </div>
  )
}

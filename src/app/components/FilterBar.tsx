"use client"
import { useEffect, useState } from "react"

export default function FilterBar({ filters }: { filters: string[] }) {
  const [active, setActive] = useState<string[]>([])
  const [scrolled, setScrolled] = useState(false)
  const toggle = (f: string) => {
    setActive(prev => (prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]))
  }
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div className="hidden sm:block sticky top-16 z-40">
      <div className={`rounded-full border bg-white/80 backdrop-blur px-2 py-2 flex flex-wrap gap-2 justify-center ${scrolled ? "shadow-sm border-sand" : "border-sand"}`}>
        {filters.map(f => {
          const is = active.includes(f)
          return (
            <button
              key={f}
              onClick={() => toggle(f)}
              className={`rounded-full px-4 py-2 text-sm border transition ${
                is ? "bg-aqua text-white border-aqua" : "bg-sand/50 text-navy border-sand hover:bg-sand"
              }`}
              aria-pressed={is}
            >
              {f}
            </button>
          )
        })}
      </div>
    </div>
  )
}

"use client"
import { useEffect, useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "./icons"

type Props = { items: React.ReactNode[] }
export default function ScrollRow({ items }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined
      const w = first ? first.offsetWidth : el.clientWidth
      const i = Math.round(el.scrollLeft / w)
      setIndex(Math.max(0, Math.min(items.length - 1, i)))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener("scroll", onScroll)
  }, [items.length])

  return (
    <div className="relative">
      <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-webkit-overflow-scrolling:touch]">
        {items.map((it, idx) => (
          <div key={idx} className="snap-start shrink-0 min-w-[80%] sm:min-w-[60%]">
            {it}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-sand via-sand/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-sand via-sand/70 to-transparent" />
      <div className="absolute inset-y-0 left-2 flex items-center">
        <button
          onClick={() => {
            const el = ref.current
            if (!el) return
            const first = el.children[0] as HTMLElement | undefined
            const w = first ? first.offsetWidth : el.clientWidth
            el.scrollBy({ left: -w, behavior: "smooth" })
          }}
          className="rounded-full bg-white/80 backdrop-blur border border-sand p-2 shadow-sm"
          aria-label="Previous"
        >
          <ChevronLeftIcon className="h-5 w-5 text-navy" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 flex items-center">
        <button
          onClick={() => {
            const el = ref.current
            if (!el) return
            const first = el.children[0] as HTMLElement | undefined
            const w = first ? first.offsetWidth : el.clientWidth
            el.scrollBy({ left: w, behavior: "smooth" })
          }}
          className="rounded-full bg-white/80 backdrop-blur border border-sand p-2 shadow-sm"
          aria-label="Next"
        >
          <ChevronRightIcon className="h-5 w-5 text-navy" />
        </button>
      </div>
      <div className="mt-2 flex justify-center gap-2">
        {items.map((_, i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${index === i ? "bg-navy" : "bg-sand border border-sand"}`} />
        ))}
      </div>
    </div>
  )
}

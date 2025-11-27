"use client"
import { useEffect, useState } from "react"

export default function FiltersChip({ filters }: { filters: string[] }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string[]>([])
  const toggle = (f: string) => setActive(prev => (prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]))
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])
  return (
    <>
      <div className="sm:hidden sticky top-16 z-40 px-4">
        <button onClick={() => setOpen(true)} className="rounded-full border border-sand bg-white shadow px-4 py-2 text-sm">Filters</button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 right-0" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-t-2xl border-t border-sand bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="text-navy font-serif text-lg">Filters</div>
                <button onClick={() => setOpen(false)} className="rounded-md border border-sand px-3 py-2" aria-label="Close filters">×</button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {filters.map(f => {
                  const is = active.includes(f)
                  return (
                    <button key={f} onClick={() => toggle(f)} className={`rounded-full px-4 py-2 text-sm border transition ${is ? "bg-aqua text-white border-aqua" : "bg-sand/50 text-navy border-sand"}`}>{f}</button>
                  )
                })}
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button onClick={() => setActive([])} className="rounded-full border border-sand px-4 py-2">Clear</button>
                <button onClick={() => setOpen(false)} className="rounded-full bg-navy text-white px-4 py-2">Apply</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

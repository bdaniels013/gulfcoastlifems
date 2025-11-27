"use client"
import { useState } from "react"

export default function LeadForm({ cta = "Get Custom Home Recommendations" }: { cta?: string }) {
  const [done, setDone] = useState(false)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDone(true)
  }
  if (done) return <div className="rounded-xl border border-sand bg-white p-6">Thanks! We’ll be in touch shortly.</div>
  return (
    <form id="contact" onSubmit={onSubmit} className="grid gap-4 bg-white rounded-xl p-6 shadow-sm border border-sand">
      <div className="grid gap-2 md:grid-cols-2">
        <label className="sr-only" htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Your name" required className="w-full rounded-md border border-sand bg-sand/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua" />
        <label className="sr-only" htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Email" required className="w-full rounded-md border border-sand bg-sand/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua" />
      </div>
      <label className="sr-only" htmlFor="lookingFor">Looking for</label>
      <input id="lookingFor" name="lookingFor" placeholder="What are you looking for?" className="w-full rounded-md border border-sand bg-sand/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua" />
      <button type="submit" className="inline-flex justify-center rounded-full bg-navy text-white px-5 py-3 hover:bg-navy/90 transition">{cta}</button>
      <div className="text-sm text-navy/70">Prefer to talk? <a href="tel:+12282979775" className="text-aqua">Call (228) 297-9775</a></div>
    </form>
  )
}

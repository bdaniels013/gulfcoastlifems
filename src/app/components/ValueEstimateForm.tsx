"use client"
import { useState } from "react"

export default function ValueEstimateForm() {
  const [done, setDone] = useState(false)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDone(true)
  }
  if (done) return <div className="rounded-full bg-gold text-white px-4 py-2 inline-flex">Request received</div>
  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <input placeholder="Address" required className="rounded-md border border-sand bg-white px-4 py-3" />
      <input placeholder="Email" type="email" required className="rounded-md border border-sand bg-white px-4 py-3" />
      <button className="rounded-full bg-gold text-white px-5 py-3" type="submit">Request Estimate</button>
    </form>
  )
}

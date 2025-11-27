"use client"
import { useState } from "react"

export default function InlineEmailForm({ cta = "Subscribe" }: { cta?: string }) {
  const [done, setDone] = useState(false)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDone(true)
  }
  if (done) return <div className="rounded-full bg-aqua text-white px-4 py-2 inline-flex">Subscribed</div>
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input type="email" placeholder="Email" required className="flex-1 rounded-md border border-sand bg-white px-4 py-3" />
      <button className="rounded-full bg-aqua text-white px-5 py-3" type="submit">{cta}</button>
    </form>
  )
}

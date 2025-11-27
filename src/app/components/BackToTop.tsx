"use client"
import { useEffect, useState } from "react"

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-4 z-40 rounded-full bg-navy text-white px-4 py-2 shadow-lg hover:bg-navy/90"
      aria-label="Back to top"
    >
      Top
    </button>
  )
}

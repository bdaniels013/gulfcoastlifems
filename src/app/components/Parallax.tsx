"use client"
import { useEffect, useRef } from "react"

export default function Parallax({ children, intensity = 0.2, className = "" }: { children: React.ReactNode; intensity?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY * intensity
      el.style.transform = `translate3d(0, ${y}px, 0)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [intensity])
  return (
    <div className={className}>
      <div ref={ref}>{children}</div>
    </div>
  )
}

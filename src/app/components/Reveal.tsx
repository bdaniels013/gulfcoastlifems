"use client"
import { useEffect, useRef } from "react"

export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            node.classList.add("opacity-100", "translate-y-0")
            node.classList.remove("opacity-0", "translate-y-2")
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`opacity-0 translate-y-2 transition-all duration-700 ease-out ${className}`}>
      {children}
    </div>
  )
}

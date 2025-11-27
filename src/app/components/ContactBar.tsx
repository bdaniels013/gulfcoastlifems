"use client"
import Link from "next/link"

export default function ContactBar() {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 md:hidden">
      <div className="mx-4 rounded-full border border-sand bg-white shadow-lg p-2 flex items-center justify-between">
        <a href="tel:+12282979775" className="inline-flex items-center rounded-full bg-aqua text-white px-4 py-2">Call</a>
        <Link href="/realestate" className="inline-flex items-center rounded-full bg-navy text-white px-4 py-2">Search Homes</Link>
      </div>
    </div>
  )
}

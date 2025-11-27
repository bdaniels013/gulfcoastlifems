import Link from "next/link"
import { HomeIcon } from "./icons"
type Props = { city: string; blurb: string }
export default function CityCard({ city, blurb }: Props) {
  return (
    <div className="group rounded-xl bg-white border border-sand p-5 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5">
      <div className="text-xl font-serif text-navy">{city}</div>
      <p className="mt-2 text-navy/70">{blurb}</p>
      <Link href="/realestate" className="mt-4 inline-flex items-center gap-1 text-aqua group-hover:text-navy"><HomeIcon className="h-3.5 w-3.5" />View homes<span>→</span></Link>
    </div>
  )
}

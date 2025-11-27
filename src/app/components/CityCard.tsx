import Link from "next/link"
import Image from "next/image"
import { HomeIcon } from "./icons"
type Props = { city: string; blurb: string; imageSrc?: string }
export default function CityCard({ city, blurb, imageSrc }: Props) {
  return (
    <div className="group rounded-xl bg-white border border-sand shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 overflow-hidden">
      <div className="relative h-32">
        {imageSrc ? (
          <Image src={imageSrc} alt={`${city}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-sand to-aqua/20" />
        )}
      </div>
      <div className="p-5">
        <div className="text-xl font-serif text-navy">{city}</div>
        <p className="mt-2 text-navy/70">{blurb}</p>
        <Link href="/realestate" className="mt-4 inline-flex items-center gap-1 text-aqua group-hover:text-navy"><HomeIcon className="h-3.5 w-3.5" />View homes<span>→</span></Link>
      </div>
    </div>
  )
}

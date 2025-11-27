import Link from "next/link"
import Image from "next/image"
type Props = { title: string; blurb: string; href?: string; imageSrc?: string }
export default function ExploreCard({ title, blurb, href = "/realestate", imageSrc }: Props) {
  return (
    <div className="group rounded-xl bg-white border border-sand shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 overflow-hidden">
      <div className="relative h-56 md:h-64">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-sand to-aqua/20" />
        )}
      </div>
      <div className="p-5">
        <div className="text-lg font-serif text-navy">{title}</div>
        <p className="mt-2 text-navy/70">{blurb}</p>
        <Link href={href} className="mt-4 inline-flex items-center gap-1 text-aqua group-hover:text-navy">Explore homes<span>→</span></Link>
      </div>
    </div>
  )
}

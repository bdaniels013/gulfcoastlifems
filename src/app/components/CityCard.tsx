import Link from "next/link"
type Props = { city: string; blurb: string }
export default function CityCard({ city, blurb }: Props) {
  return (
    <div className="rounded-xl bg-white border border-sand p-5 shadow-sm hover:shadow-md transition">
      <div className="text-xl font-serif text-navy">{city}</div>
      <p className="mt-2 text-navy/70">{blurb}</p>
      <Link href="/realestate" className="mt-4 inline-flex text-aqua hover:text-navy">View homes in {city}</Link>
    </div>
  )
}

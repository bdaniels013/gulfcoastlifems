type Props = { price: string; beds: number; baths: number; sqft: number; city: string }
export default function ListingCard({ price, beds, baths, sqft, city }: Props) {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-sand shadow-sm transition hover:shadow-lg hover:-translate-y-0.5">
      <div className="h-40 bg-gradient-to-br from-sand to-aqua" />
      <div className="p-4 space-y-1">
        <div className="text-xl font-serif text-navy">{price}</div>
        <div className="text-navy/70">{beds} bd • {baths} ba • {sqft.toLocaleString()} sqft</div>
        <div className="text-navy/80">{city}</div>
        <button className="mt-3 inline-flex rounded-full bg-gold text-white px-4 py-2 hover:bg-gold/90">View Details</button>
      </div>
    </div>
  )
}

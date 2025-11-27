type Props = { label: string; value: string }
export default function MetricCard({ label, value }: Props) {
  return (
    <div className="rounded-xl bg-white border border-sand p-5 text-center shadow-sm">
      <div className="text-3xl font-serif text-navy">{value}</div>
      <div className="text-navy/70">{label}</div>
    </div>
  )
}

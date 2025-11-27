type Props = { title: string; blurb: string }
export default function LifestyleCard({ title, blurb }: Props) {
  return (
    <div className="rounded-xl bg-white border border-sand p-5 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5">
      <div className="text-lg font-serif text-navy">{title}</div>
      <p className="mt-2 text-navy/70">{blurb}</p>
    </div>
  )
}

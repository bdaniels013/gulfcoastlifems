type Props = { title: string; blurb: string; href?: string }
export default function GuideCard({ title, blurb, href = "#" }: Props) {
  return (
    <a href={href} className="rounded-xl bg-white border border-sand p-5 shadow-sm hover:shadow-md transition block">
      <div className="text-lg font-serif text-navy">{title}</div>
      <p className="mt-2 text-navy/70">{blurb}</p>
      <div className="mt-4 inline-flex text-aqua">Read guide</div>
    </a>
  )
}

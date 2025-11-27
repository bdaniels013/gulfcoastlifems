import { ShieldIcon } from "./icons"
type Props = { title: string; blurb: string; href?: string }
export default function GuideCard({ title, blurb, href = "#" }: Props) {
  return (
    <a href={href} className="group rounded-xl bg-white border border-sand p-5 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 block">
      <div className="text-lg font-serif text-navy inline-flex items-center gap-2"><ShieldIcon className="h-3.5 w-3.5" />{title}</div>
      <p className="mt-2 text-navy/70">{blurb}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-aqua group-hover:text-navy">Read guide<span>→</span></div>
    </a>
  )
}

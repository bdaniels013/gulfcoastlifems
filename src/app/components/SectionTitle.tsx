type Props = { title: string; subtitle?: string }
export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-8">
      <div className="inline-block h-1 w-20 bg-gold mb-4 rounded-full" />
      <h2 className="text-3xl md:text-4xl font-serif text-navy">{title}</h2>
      {subtitle && <p className="mt-2 text-navy/70">{subtitle}</p>}
    </div>
  )
}

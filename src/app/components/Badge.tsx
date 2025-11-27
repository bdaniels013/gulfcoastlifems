type Props = { label: string; variant?: "accent" | "outline"; icon?: React.ReactNode }
export default function Badge({ label, variant = "outline", icon }: Props) {
  const base = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm transition-colors"
  const styles =
    variant === "accent"
      ? "bg-gold text-white border border-gold hover:bg-gold/90"
      : "bg-white text-navy border border-sand hover:bg-sand"
  return <span className={`${base} ${styles}`}>{icon && <span className="text-current">{icon}</span>}{label}</span>
}

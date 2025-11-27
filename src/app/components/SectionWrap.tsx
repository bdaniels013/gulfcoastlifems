import Image from "next/image"

export default function SectionWrap({ src, children, overlay = "bg-white/60", className = "" }: { src: string; children: React.ReactNode; overlay?: string; className?: string }) {
  return (
    <div className={`relative rounded-3xl overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image src={src} alt="section background" fill sizes="100vw" className="object-cover" />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
      <div className="relative p-6 md:p-8 lg:p-10">{children}</div>
    </div>
  )
}

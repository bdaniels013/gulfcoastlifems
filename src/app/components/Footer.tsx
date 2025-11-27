import Image from "next/image"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-sand bg-white">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Gulf Coast Life logo" width={28} height={28} className="rounded-full" />
            <div className="text-xl font-serif text-navy">Gulf Coast Life</div>
          </div>
          <div className="text-sm text-navy/70">Mary “Lizzie” Fontenelle, Realtor®</div>
          <div className="text-sm text-navy/60">Brokerage: CENTURY 21 J. Carter & Company</div>
          <div className="text-sm text-navy/60">Direct: <a href="tel:+12282979775" className="text-aqua">(228) 297-9775</a></div>
          <div className="text-sm text-navy/60">Office: <a href="tel:+12287313881" className="text-aqua">(228) 731-3881</a></div>
          <address className="not-italic text-sm text-navy/60">
            2137 East Pass Road<br />
            Suite A<br />
            Gulfport, MS 39507
          </address>
        </div>
        <div className="text-sm text-navy/60">
          Equal Housing Opportunity. REALTOR®.
        </div>
        <div className="text-right text-sm text-navy/60 md:text-right">
          © {year} Gulf Coast Life
        </div>
      </div>
    </footer>
  )
}

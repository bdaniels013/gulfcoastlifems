export default function ContactCard() {
  return (
    <div className="rounded-2xl border border-sand bg-white p-6 shadow-sm">
      <div className="text-xl font-serif text-navy">Contact & Office</div>
      <div className="mt-3 grid gap-2 text-navy/80">
        <div>Mobile: <a href="tel:+12282979775" className="text-aqua">(228) 297-9775</a></div>
        <div>Office: <a href="tel:+12287313881" className="text-aqua">(228) 731-3881</a></div>
        <div className="mt-2 text-navy/70">
          2137 East Pass Road<br />
          Suite A<br />
          Gulfport, MS 39507
        </div>
      </div>
    </div>
  )
}

export default function LeadForm({ cta = "Get Custom Home Recommendations" }: { cta?: string }) {
  return (
    <form id="contact" action="#" method="post" className="grid gap-4 bg-white rounded-xl p-6 shadow-sm border border-sand">
      <div className="grid gap-2 md:grid-cols-2">
        <input name="name" placeholder="Your name" className="w-full rounded-md border border-sand bg-sand/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua" />
        <input type="email" name="email" placeholder="Email" className="w-full rounded-md border border-sand bg-sand/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua" />
      </div>
      <input name="lookingFor" placeholder="What are you looking for?" className="w-full rounded-md border border-sand bg-sand/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua" />
      <button type="submit" className="inline-flex justify-center rounded-full bg-navy text-white px-5 py-3 hover:bg-navy/90">{cta}</button>
      <div className="text-sm text-navy/70">Prefer to talk? <a href="tel:+12282979775" className="text-aqua">Call (228) 297-9775</a></div>
    </form>
  )
}

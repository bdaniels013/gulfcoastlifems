import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactBar from "./components/ContactBar"
import BackToTop from "./components/BackToTop"

const heading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })
const body = Inter({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Gulf Coast Life | Mississippi Gulf Coast Real Estate",
  description: "Modern coastal real estate and lifestyle hub by Mary “Lizzie” Fontenelle.",
  metadataBase: new URL("https://gulfcoastlifems.vercel.app"),
  icons: {
    icon: "/bay bridge portrait.jpg",
    shortcut: "/bay bridge portrait.jpg",
    apple: "/bay bridge portrait.jpg",
  },
  openGraph: {
    title: "Gulf Coast Life MS — Coastal Real Estate",
    description: "Explore homes, guides, and coastal living across the Mississippi Gulf Coast.",
    images: ["/bay st louis aerial.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/bay st louis aerial.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans bg-sand text-navy overflow-x-hidden">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="motion-safe:block motion-reduce:hidden absolute inset-0">
            <iframe
              title="Coastal aerial background"
              src="https://www.youtube-nocookie.com/embed/P8m5gTP5cYk?autoplay=1&mute=1&playsinline=1&controls=0&loop=1&playlist=P8m5gTP5cYk&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
              allow="autoplay; fullscreen; encrypted-media"
              loading="lazy"
              frameBorder="0"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh]"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-white/40" />
        </div>
        <Header />
        <main className="container pb-28 md:pb-0">{children}</main>
        <Footer />
        <ContactBar />
        <BackToTop />
      </body>
    </html>
  )
}

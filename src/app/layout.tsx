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
      <body className="font-sans bg-sand text-navy">
        <Header />
        <main className="container pb-28 md:pb-0">{children}</main>
        <Footer />
        <ContactBar />
        <BackToTop />
      </body>
    </html>
  )
}

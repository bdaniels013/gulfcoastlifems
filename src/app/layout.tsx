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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans bg-sand text-navy">
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <ContactBar />
        <BackToTop />
      </body>
    </html>
  )
}

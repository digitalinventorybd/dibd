import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/Home/header";
import { Footer } from "@/components/Home/footer";
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "digitalinventorybd - Your Strategic Digital Partner",
  description:
    "Leading Digital Marketing agency in Bangladesh. We help businesses thrive in the digital world with innovative strategies and results-oriented approach.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <LanguageProvider>
<Header />
          {children}
          <Footer />
</LanguageProvider>
      </body>
    </html>
  )
}
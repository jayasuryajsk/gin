import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Navigation } from "@/components/navigation"
import { CartProvider } from "@/lib/cart-context"
import { Inter, Playfair_Display } from "next/font/google"
import { AgeVerification } from '@/components/age-verification'
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" })

export const metadata: Metadata = {
  title: "Blue Wing Distillery - Premium Australian Gin",
  description: "Discover our collection of premium handcrafted gins made in Australia",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${inter.className} bg-background text-foreground`}
      >
        <CartProvider>
          <AgeVerification />
          <Navigation />
          {children}
          <footer className="w-full py-12 px-4 bg-primary/10">
            <div className="container mx-auto text-center">
              <p className="text-sm text-foreground mb-4">
                &copy; {new Date().getFullYear()} Blue Wing Distillery. All rights reserved. Please drink responsibly.
              </p>
              <div className="mb-6">
                <p className="text-xs text-foreground">
                  Flat rate shipping: $12 (Free for orders over $200)
                </p>
              </div>
              <div className="mt-4 space-x-4">
                <a 
                  href="/terms/Blue Wing T&Cs.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Terms of Service
                </a>
                <a 
                  href="/terms/Blue Wing Privacy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="mailto:info@bluewingdistillery.com" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="tel:+61423580576" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'
import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { CartProvider } from "@/lib/cart-context"
import { Inter, Playfair_Display } from "next/font/google"
import { OffsetSpacer } from '@/components/OffsetSpacer'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" })

export const metadata: Metadata = {
  title: "DGIN - Premium Craft Gin",
  description: "Discover our collection of premium craft gins",
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
          <Navigation />
          <OffsetSpacer />
          {children}
          <footer className="w-full py-12 px-4 bg-secondary">
            <div className="container mx-auto text-center">
              <p className="text-sm text-secondary-foreground">
                &copy; 2023 DGIN. All rights reserved. Please drink responsibly.
              </p>
              <div className="mt-4 space-x-4">
                <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </footer>
          <CustomCursor />
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'
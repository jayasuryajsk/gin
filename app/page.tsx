"use client"

import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { BottleShowcase } from "@/components/bottle-showcase"
import Link from "next/link"
import Script from "next/script"

export default function Home() {
  return (
    <main className="home-page flex min-h-screen flex-col items-center justify-between">
      <Script id="schema-markup" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Blue Wing Distillery",
            "url": "https://bluewingdistillery.com",
            "logo": "https://bluewingdistillery.com/logo.svg",
            "description": "Crafted with passion by a veteran and a chemical engineer, our Native Citrus Gin captures the essence of Australia with vibrant flavors and locally sourced botanicals.",
            "telephone": "+61423580576",
            "email": "info@bluewingdistillery.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Australia"
            },
            "sameAs": [
              "https://www.instagram.com/bluewingdistillery/",
              "https://www.facebook.com/bluewingdistillery/"
            ],
            "potentialAction": {
              "@type": "ViewAction",
              "target": [
                "https://bluewingdistillery.com/products/native-citrus-gin"
              ]
            }
          }
        `}
      </Script>

      <AutoSliderBanner />
      
      <section className="w-full py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Discover Our Premium <span className="gradient-text">Australian Gin</span></h2>
              <p className="mb-8 text-lg">
                Crafted with passion by a veteran and a chemical engineer, our Native Citrus Gin 
                captures the essence of Australia with vibrant flavors and locally sourced botanicals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products/native-citrus-gin" 
                  className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <BottleShowcase />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


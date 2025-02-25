import { GinCard } from "@/components/gin-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { Button } from "@/components/ui/button"
import { gins } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AutoSliderBanner />

      <section id="featured-products" className="w-full py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-serif font-bold text-center text-foreground">Blue Wing Gin</h2>
          <div className="flex justify-center">
            <div className="max-w-md">
              <GinCard {...gins[0]} />
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="text-lg font-medium px-8 py-3">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="newsletter" className="w-full py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Stay Updated</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new product announcements, and gin-spiration.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-lg bg-background text-foreground border border-input"
              />
              <Button type="submit" className="text-lg font-medium px-6 py-2">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}


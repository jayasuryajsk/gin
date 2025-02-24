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
          <h2 className="mb-12 text-4xl font-serif font-bold text-center text-foreground">Featured Gins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gins.slice(0, 4).map((gin) => (
              <GinCard key={gin.id} {...gin} />
            ))}
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

      <section id="gin-101-preview" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-serif font-bold text-center text-foreground">Discover the World of Gin</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Embark on a journey through the rich history and complex flavors of gin. From its origins as a medicinal
                tonic to its current status as a sophisticated spirit, learn everything you need to know about this
                juniper-based wonder.
              </p>
              <Link href="/gin-101">
                <Button variant="outline" className="text-lg font-medium px-6 py-2">
                  Explore Gin 101
                </Button>
              </Link>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Gin botanicals"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="recipes-preview" className="w-full py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-serif font-bold text-center text-foreground">
            Craft the Perfect Cocktail
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Gin cocktail"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Discover our collection of exquisite gin cocktail recipes, crafted to perfection by our master
                mixologists. From classic G&Ts to innovative creations, find your new favorite drink.
              </p>
              <Link href="/recipes">
                <Button variant="outline" className="text-lg font-medium px-6 py-2">
                  Explore Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="distillery-tour-preview" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-serif font-bold text-center text-foreground">Experience Our Distillery</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Step into the world of DGIN with our immersive distillery tour. Learn about our unique distillation
                process, the botanicals we use, and the history of gin making. Book your tour today for an unforgettable
                experience.
              </p>
              <Link href="/distillery-tour">
                <Button variant="outline" className="text-lg font-medium px-6 py-2">
                  Book a Tour
                </Button>
              </Link>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="DGIN Distillery"
                fill
                className="object-cover rounded-lg"
              />
            </div>
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


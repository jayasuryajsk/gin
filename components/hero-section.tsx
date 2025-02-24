import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image src="/hero-image.jpg" alt="Premium Craft Gin" fill style={{ objectFit: "cover" }} priority />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wide text-white text-center mb-4">
          Premium Craft Gin
        </h1>
        <p className="text-xl sm:text-2xl font-sans text-jin-100 text-center mb-8 max-w-2xl">
          Elevate Your Spirits with Our Artisanal Gin Collection
        </p>
        <Button
          onClick={handleShopClick}
          size="lg"
          className="bg-jin-500 hover:bg-jin-600 text-white text-lg font-medium px-8 py-3"
        >
          Explore Collection
        </Button>
      </div>
    </div>
  )
}


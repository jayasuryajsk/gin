"use client"

import Image from "next/image"
import { notFound, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { gins } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const gin = gins.find((g) => g.id === Number.parseInt(params.id))
  const { addToCart } = useCart()
  const router = useRouter()

  if (!gin) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image src={gin.image || "/placeholder.svg"} alt={gin.name} fill className="object-cover rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{gin.name}</h1>
          <p className="text-2xl font-semibold mb-4">${gin.price.toFixed(2)}</p>
          <p className="mb-6">{gin.description}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <p>ABV: {gin.abv}%</p>
            <p>Volume: {gin.volume}ml</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tasting Notes</h2>
            <ul className="list-disc list-inside">
              {gin.tastingNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Perfect Pairings</h2>
            <ul className="list-disc list-inside">
              {gin.pairings.map((pairing, index) => (
                <li key={index}>{pairing}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Ingredients</h2>
            <ul className="list-disc list-inside">
              {gin.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          {gin.awards && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Awards</h2>
              <ul className="list-disc list-inside">
                {gin.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>
          )}
          <Button 
            size="lg" 
            onClick={() => {
              addToCart(gin);
              router.push('/checkout');
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}


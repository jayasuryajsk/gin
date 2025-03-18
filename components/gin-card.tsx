"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import type { Gin } from "@/lib/products"

// Helper function to safely format prices
const formatPrice = (price?: number): string => {
  if (price === undefined || isNaN(price)) return "0.00"
  return price.toFixed(2)
}

interface GinCardProps extends Gin {}

export function GinCard({ id, name, price, image, description, abv, volume, tastingNotes, pairings, ingredients, story }: GinCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div 
      className="group relative p-1 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-soft shadow-soft bg-card overflow-hidden">
        <Link href={`/products/${id}`} className="block">
          <div className="relative aspect-square overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/20 rounded-t-soft" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">{volume}ml</p>
                <p className="text-sm font-medium text-foreground">{abv}% ABV</p>
              </div>
            </div>
          </div>
          
          <div className="p-2 text-center">
            <h3 className="font-serif text-xs tracking-wide mb-1 gradient-text">
              {name}
            </h3>
            <p className="text-xs text-muted-foreground mb-1 line-clamp-2 leading-snug">
              {description}
            </p>
            <p className="text-sm font-light">
              ${formatPrice(price)}
            </p>
          </div>
        </Link>
        
        <div className={`flex justify-center px-2 pb-2 transition-all duration-500 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-full text-xs h-7 px-4"
            onClick={() => addToCart({ id, name, price, image, description, abv, volume, tastingNotes, pairings, ingredients, story })}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}


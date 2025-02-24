"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: number
  image1: string
  image2: string
}

export function ProductCard({ name, price, image1, image2 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
      <div
        className="relative aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? image2 : image1}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-serif font-semibold text-jin-800">{name}</h3>
        <p className="text-jin-600 mb-4">${price.toFixed(2)}</p>
        <Button className="w-full bg-jin-500 hover:bg-jin-600 text-white">Add to Cart</Button>
      </div>
    </div>
  )
}


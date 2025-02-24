"use client"

import { useState, useEffect } from "react"
import { GinCard } from "@/components/gin-card"
import { Loading } from "@/components/loading"
import { gins } from "@/lib/products"

export default function ProductsPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Premium Gins</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gins.map((gin) => (
          <GinCard key={gin.id} {...gin} />
        ))}
      </div>
    </div>
  )
}


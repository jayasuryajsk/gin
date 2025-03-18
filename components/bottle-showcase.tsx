"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function BottleShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      
      // Subtle parallax effect
      container.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }
    
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
    }
    
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div 
        ref={containerRef}
        className="relative aspect-[3/4] transition-transform duration-200 ease-out"
      >
        {/* Glow effect behind bottle */}
        <div className="absolute inset-0 rounded-full bg-[#00c8d6]/20 blur-3xl transform scale-75 translate-y-10"></div>
        
        {/* Bottle image */}
        <div className="relative z-10 w-full h-full">
          <Image
            src="/images/Blue Wing Gin.jpg"
            alt="Blue Wing Native Citrus Gin"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-serif mb-2 gradient-text">Native Citrus Gin</h2>
        <p className="text-muted-foreground">Experience the vibrant flavors of Australia</p>
      </div>
    </div>
  )
} 
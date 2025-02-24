"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export function Loading() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300) // Show after 300ms delay
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900 bg-opacity-50 backdrop-blur-sm">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}


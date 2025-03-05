"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

export const AgeVerification = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const hasVerified = localStorage.getItem('age-verified')
    if (!hasVerified) {
      setShowModal(true)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true')
    setShowModal(false)
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md p-6 mx-4 bg-white border border-primary/20 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0"></div>
        <div className="relative z-10">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image src="/logo.svg" alt="Blue Wing Distillery" fill className="object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4 text-primary">Age Verification</h2>
          <p className="text-center mb-6 text-foreground">
            Welcome to Blue Wing Distillery. To enter this site, please confirm that you are 18 years of age or older.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleVerify}
              className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              I am 18 or older
            </button>
            <a
              href="https://www.google.com"
              className="px-6 py-2 bg-muted text-muted-foreground font-medium rounded-md hover:bg-muted/80 transition-colors text-center"
            >
              I am under 18
            </a>
          </div>
          <p className="text-xs text-center mt-4 text-muted-foreground">
            By entering this site, you agree to our Terms and Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
} 
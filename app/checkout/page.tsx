"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Simulate payment processing
      setTimeout(() => {
        clearCart()
        router.push("/checkout/confirmation")
      }, 2000)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" value={formData.country} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} required />
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="space-x-2">
          <span
            className={`px-3 py-1 rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-gray-700"}`}
          >
            1
          </span>
          <span
            className={`px-3 py-1 rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-gray-700"}`}
          >
            2
          </span>
          <span
            className={`px-3 py-1 rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-gray-700"}`}
          >
            3
          </span>
        </div>
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
              Previous
            </Button>
          )}
          <Button type="submit">{step < 3 ? "Next" : "Place Order"}</Button>
        </div>
      </form>
    </div>
  )
}


import type React from "react"
import { CartProvider } from "@/lib/cart-context"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        {children}
      </div>
    </CartProvider>
  )
}


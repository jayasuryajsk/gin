"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { createCheckout } from "@/lib/shopify"

// Helper function to safely format prices
const formatPrice = (price: number | undefined): string => {
  if (price === undefined || isNaN(price)) return "0.00" // Don't default to any specific price
  return price.toFixed(2)
}

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isLoading } = useCart()
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const handleCheckout = async () => {
    setCheckoutLoading(true)
    try {
      if (cart.length > 0) {
        console.log('Cart items:', cart);
        // Transform cart items to include only necessary Shopify data
        const checkoutItems = cart.map(item => {
          console.log('Processing item:', item);
          return {
            id: item.shopifyId || item.id,
            quantity: item.quantity
          };
        });
        
        console.log('Checkout items:', checkoutItems);
        const checkoutUrl = await createCheckout(checkoutItems)
        console.log('Checkout URL:', checkoutUrl);
        window.location.href = checkoutUrl
      }
    } catch (error) {
      console.error("Detailed checkout error:", error)
      // If error is an object with response data, log it
      if (error && typeof error === 'object' && 'response' in error) {
        console.error('Error response:', error.response);
      }
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="mb-6 text-muted-foreground">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {isLoading && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Loading cart data...</p>
          </div>
        )}
        
        {!isLoading && cart.map((item) => {
          // Use shopifyPrice as the primary source, no hardcoded fallback
          const displayPrice = item.shopifyPrice !== undefined ? item.shopifyPrice : item.price;
          
          return (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-700 py-4">
              <div className="flex items-center">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-400">${formatPrice(displayPrice)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </Button>
                <Button variant="destructive" size="sm" className="ml-4" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          )
        })}
        
        <div className="mt-8">
          <p className="text-xl font-semibold">Total Items: {totalItems}</p>
          <p className="text-2xl font-bold mt-2">Total Price: ${formatPrice(totalPrice)}</p>
        </div>
        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button onClick={handleCheckout} disabled={checkoutLoading || isLoading}>
            {checkoutLoading ? "Processing..." : "Proceed to Checkout"}
          </Button>
        </div>
      </div>
    </main>
  )
}


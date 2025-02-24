"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-4">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.map((item) => (
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
              <p className="text-gray-400">${item.price.toFixed(2)}</p>
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
      ))}
      <div className="mt-8">
        <p className="text-xl font-semibold">Total Items: {totalItems}</p>
        <p className="text-2xl font-bold mt-2">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={clearCart}>
          Clear Cart
        </Button>
        <Link href="/checkout">
          <Button>Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  )
}


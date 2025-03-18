"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Gin } from "./products"
import { getProduct } from "@/lib/shopify"

interface CartItem extends Gin {
  quantity: number
  shopifyId?: string
  shopifyPrice?: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Gin & { shopifyId?: string, shopifyPrice?: number }) => void
  removeFromCart: (itemId: number) => void
  updateQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isLoading: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
        
        // After loading the cart, fetch fresh prices from Shopify
        refreshCartPrices(parsedCart)
      } catch (e) {
        console.error("Error parsing cart data:", e)
        localStorage.removeItem("cart")
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Function to refresh prices from Shopify
  const refreshCartPrices = async (cartItems: CartItem[]) => {
    if (cartItems.length === 0) return
    
    setIsLoading(true)
    try {
      // Get real product price from Shopify
      const shopifyProductId = process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_ID || '';
      if (!shopifyProductId) {
        console.error("Missing Shopify product ID in environment variables");
        setIsLoading(false);
        return;
      }
      
      const shopifyProduct = await getProduct(shopifyProductId);
      console.log("Fetched Shopify product for pricing:", shopifyProduct);
      
      if (shopifyProduct && shopifyProduct.variants && shopifyProduct.variants[0]) {
        const realPrice = parseFloat(shopifyProduct.variants[0].price);
        
        if (!isNaN(realPrice)) {
          console.log(`Shopify price retrieved: $${realPrice}`);
          
          // Update all cart items with the real Shopify price
          const updatedCart = cartItems.map(item => ({
            ...item,
            shopifyPrice: realPrice
          }));
          
          setCart(updatedCart);
        } else {
          console.error("Invalid price format from Shopify:", shopifyProduct.variants[0].price);
        }
      } else {
        console.error("Could not find variant price in Shopify product", shopifyProduct);
      }
    } catch (error) {
      console.error("Error fetching Shopify prices:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const addToCart = (item: Gin & { shopifyId?: string, shopifyPrice?: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
    
    // If this is a new item being added, refresh prices
    if (!cart.some(cartItem => cartItem.id === item.id)) {
      refreshCartPrices([...cart, { ...item, quantity: 1 }]);
    }
  }

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  
  // Use shopifyPrice if available, otherwise fall back to price from the products.ts file
  const totalPrice = cart.reduce((total, item) => {
    // Use shopifyPrice as the primary source of truth
    const itemPrice = item.shopifyPrice !== undefined ? item.shopifyPrice : 
                      (typeof item.price === 'number' ? item.price : 0);
    return total + itemPrice * item.quantity;
  }, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}


"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { createCheckout } from '@/lib/shopify';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart } from 'lucide-react';

export default function ShopifyBuyButton({ productId, buttonText = "Add to Cart", product }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    if (product) {
      setIsLoading(true);
      
      try {
        // Extract accurate pricing from Shopify product data
        const variantId = product.variants[0].id;
        
        // Handle different price formats
        let shopifyPrice = 0;
        const priceData = product.variants[0]?.price;
        
        if (typeof priceData === 'object' && priceData.amount) {
          // New API format returns an object with amount
          shopifyPrice = parseFloat(priceData.amount);
        } else {
          // Old format returns just a number/string
          shopifyPrice = parseFloat(priceData || 0);
        }
        
        console.log('Adding to cart with variant ID:', variantId);
        console.log('Using Shopify price:', shopifyPrice);
        
        addToCart({
          id: product.id,
          shopifyId: variantId, // Store the variant ID for checkout
          name: product.title,
          price: 0, // This will be ignored in favor of shopifyPrice
          shopifyPrice: shopifyPrice, // The actual price from Shopify
          image: product.images[0]?.src,
          description: product.description,
          quantity: 1
        });
        
        // Show added success state briefly
        setIsAdded(true);
        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  return (
    <div>
      <Button 
        size="lg" 
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`w-full text-lg font-medium px-8 py-3 transition-all duration-300 ${
          isAdded ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Adding...
          </span>
        ) : isAdded ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Added to Cart
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            {buttonText}
          </span>
        )}
      </Button>
    </div>
  );
} 
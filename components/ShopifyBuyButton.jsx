"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { createCheckout } from '@/lib/shopify';

export default function ShopifyBuyButton({ productId, buttonText = "Buy Now" }) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleBuyNow = async () => {
    setIsLoading(true);
    try {
      // Create checkout and get checkout URL
      const checkoutUrl = await createCheckout(productId);
      
      // Redirect to Shopify checkout
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Error creating checkout:", error);
      setIsLoading(false);
    }
  };
  
  return (
    <Button 
      size="lg" 
      onClick={handleBuyNow}
      disabled={isLoading}
      className="text-lg font-medium px-8 py-3"
    >
      {isLoading ? "Loading..." : buttonText}
    </Button>
  );
} 
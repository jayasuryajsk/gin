"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { createCheckout } from '@/lib/shopify';
import { useCart } from '@/lib/cart-context';

export default function ShopifyBuyButton({ productId, buttonText = "Buy Now", product }) {
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();
  
  const handleBuyNow = async () => {
    setIsLoading(true);
    try {
      console.log('Buy Now clicked with product:', product);
      // Get the variant ID from the product
      const variantId = product.variants[0].id;
      console.log('Using variant ID for checkout:', variantId);
      
      // Create checkout with single item
      const checkoutUrl = await createCheckout([{
        id: variantId,
        quantity: 1
      }]);
      
      console.log('Received checkout URL:', checkoutUrl);
      // Redirect to Shopify checkout
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error('No checkout URL received');
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      const variantId = product.variants[0].id;
      console.log('Adding to cart with variant ID:', variantId);
      
      addToCart({
        id: product.id,
        shopifyId: variantId, // Store the variant ID for checkout
        name: product.title,
        price: parseFloat(product.variants[0]?.price || 0),
        image: product.images[0]?.src,
        description: product.description,
        quantity: 1
      });
    }
  };
  
  return (
    <div className="flex gap-4">
      <Button 
        size="lg" 
        onClick={handleAddToCart}
        disabled={isLoading}
        className="text-lg font-medium px-8 py-3"
      >
        Add to Cart
      </Button>
      <Button 
        size="lg" 
        onClick={handleBuyNow}
        disabled={isLoading}
        variant="outline"
        className="text-lg font-medium px-8 py-3"
      >
        Buy Now
      </Button>
    </div>
  );
} 
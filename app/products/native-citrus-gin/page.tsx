"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getProduct } from "@/lib/shopify"
import ShopifyBuyButton from "@/components/ShopifyBuyButton"
import { Loading } from "@/components/loading"

export default function NativeCitrusGinPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Get the product using the product ID from environment variables
        const productId = process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_ID || '';
        
        if (!productId) {
          setError('Product ID is missing. Please check your environment variables.');
          setLoading(false);
          return;
        }
        
        const shopifyProduct = await getProduct(productId);
        console.log("Fetched product:", shopifyProduct);
        setProduct(shopifyProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(`Error fetching product: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  // Helper function to safely parse price
  const formatPrice = (price: any) => {
    // Handle different price format possibilities
    if (!price) return "0.00";
    
    // If price is already an object with amount property (from our updated API)
    if (typeof price === 'object' && price.amount) {
      const parsedPrice = Number(price.amount);
      return !isNaN(parsedPrice) ? parsedPrice.toFixed(2) : "0.00";
    }
    
    // Handle string or number price
    const parsedPrice = Number(price);
    return !isNaN(parsedPrice) ? parsedPrice.toFixed(2) : "0.00";
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-8 bg-red-50 rounded-lg border border-red-200">
          <h1 className="text-2xl font-bold text-red-700 mb-4">Error Loading Product</h1>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-8 bg-muted rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p>We couldn't find the Blue Wing Native Citrus Gin product. Please check back later.</p>
        </div>
      </div>
    );
  }

  // Get the first variant's price (handle both formats)
  const priceData = product.variants[0]?.price || 0;
  const price = typeof priceData === 'object' ? priceData.amount : priceData;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="md:flex">
          <div className="md:w-1/2 relative aspect-square mb-8 md:mb-0">
            <Image 
              src={product.images[0]?.src || "/images/Blue Wing Gin.jpg"} 
              alt={product.title || "Blue Wing Native Citrus Gin"} 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{product.title || "Blue Wing Native Citrus Gin"}</h1>
            <p className="text-2xl font-semibold mb-4">${formatPrice(price)} +GST</p>
            
            <div className="prose mb-6">
              {product.descriptionHtml ? (
                <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
              ) : (
                <p>
                  Discover the bold and refreshing taste of Blue Wing Citrus Gin, a masterfully crafted
                  spirit that captures the essence of the land Down Under. This gin is a symphony of sun-ripened 
                  citrus and native botanicals, offering a bright, aromatic experience with every sip.
                </p>
              )}
            </div>
            
            <p className="mb-2">700ml | ABV 40%</p>
            <p className="text-sm text-muted-foreground mb-6">Flat rate shipping: $12 (Free for orders over $200)</p>
            
            <div className="mb-8 max-w-xs">
              <ShopifyBuyButton 
                productId={product.id} 
                buttonText="Add to Cart" 
                product={product}
              />
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold mb-4">Perfect for:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>A refreshing gin and tonic</li>
                <li>A sophisticated cocktail</li>
                <li>Simply enjoyed neat over ice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
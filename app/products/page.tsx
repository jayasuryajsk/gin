"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { getProduct } from "@/lib/shopify"
import ShopifyBuyButton from "@/components/ShopifyBuyButton"
import { Loading } from "@/components/loading"

export default function ProductsPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Get the single product using the product ID from environment variables
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
        const errorMessage = error instanceof Error 
          ? error.message 
          : (error && typeof error === 'object' && 'message' in error)
            ? String((error as any).message)
            : JSON.stringify(error);
            
        setError(`Error fetching product: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  // Helper function to safely parse price
  const formatPrice = (price: any) => {
    if (!price) return "0.00";
    const parsedPrice = Number(price);
    return !isNaN(parsedPrice) ? parsedPrice.toFixed(2) : "98.00"; // Fallback to default price if NaN
  };

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        {loading && <div className="text-center py-8"><Loading /></div>}
        
        {!loading && error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md mb-8">
            <h3 className="text-lg font-semibold text-red-700 mb-2">Error</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}
        
        {!loading && !product && !error && (
          <div className="text-center p-8 bg-muted rounded-md">
            <p>Product not found. Please check your Shopify configuration.</p>
          </div>
        )}
        
        {!loading && product && (
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative h-80 md:h-auto md:w-1/2">
                <Image 
                  src={product.images[0]?.src || "/placeholder.svg"} 
                  alt={product.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <p className="text-xl font-semibold mb-4">${formatPrice(product.variants[0]?.price)} +GST</p>
                <div 
                  className="mb-6 prose"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Flat rate shipping: $12 (Free for orders over $200)</p>
                </div>

                <div>
                  <ShopifyBuyButton 
                    productId={product.id} 
                    buttonText="Add to Cart" 
                    product={product}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}


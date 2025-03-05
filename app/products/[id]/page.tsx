"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { getProduct } from "@/lib/shopify"
import ShopifyBuyButton from "@/components/ShopifyBuyButton"
import { Loading } from "@/components/loading"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // For now, we're using a hardcoded product ID from environment variables
        // Later you can use: params.id or get all products and find the one needed
        const productId = process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_ID || '';
        const shopifyProduct = await getProduct(productId);
        setProduct(shopifyProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return notFound();
  }

  // Get the first variant's price
  const price = product.variants[0]?.price || 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image 
            src={product.images[0]?.src || "/placeholder.svg"} 
            alt={product.title} 
            fill 
            className="object-cover rounded-lg" 
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-4">${parseFloat(price).toFixed(2)}</p>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} className="mb-6" />
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            {/* You can add custom details from product metafields if available */}
          </div>
          
          <ShopifyBuyButton 
            productId={product.id} 
            buttonText="Add to Cart" 
          />
        </div>
      </div>
    </div>
  );
}


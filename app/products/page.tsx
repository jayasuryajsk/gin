"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { getProduct } from "@/lib/shopify"
import ShopifyBuyButton from "@/components/ShopifyBuyButton"
import { Loading } from "@/components/loading"
import { getAllProducts } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

export default function ProductsPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const products = getAllProducts()

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Get the single product using the product ID from environment variables
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
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Our Premium Gin</h1>
        <p>Product not found. Please check your Shopify configuration.</p>
      </div>
    );
  }

  // Get the first variant's price
  const price = product.variants[0]?.price || 0;

  return (
    <main className="pt-16">
      <PageHeader 
        title="Our Premium Collection" 
        description="Discover our range of handcrafted gins made with locally sourced botanicals and decades of distilling expertise."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-4 shadow-soft">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-lg mb-2 font-serif">{product.name}</h3>
                <p className="text-lg font-medium mb-2">${product.price.toFixed(2)}</p>
                <p className="text-sm mb-3 text-muted-foreground line-clamp-2">{product.description}</p>
                
                <div className="space-x-2">
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" size="sm">View Details</Button>
                  </Link>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


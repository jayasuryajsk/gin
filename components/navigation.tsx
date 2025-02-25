"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function Navigation() {
  const pathname = usePathname()
  const { totalItems } = useCart()

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background border-b">
        <div className="container mx-auto px-8">
          <nav className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="text-xl font-serif tracking-wide gradient-text hover:opacity-90 transition-opacity duration-300"
            >
              BLUE WING GIN
            </Link>
            
            <div className="flex items-center space-x-8">
              <div className="space-x-8 text-sm">
                <Link
                  href="/"
                  className={`
                    relative py-1 transition-colors duration-300
                    ${pathname === "/" 
                      ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-primary" 
                      : "text-muted-foreground hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary/50 after:transition-all hover:after:w-full"
                    }
                  `}
                >
                  Home
                </Link>
                <Link
                  href="/products/1"
                  className={`
                    relative py-1 transition-colors duration-300
                    ${pathname.includes("/products")
                      ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-primary"
                      : "text-muted-foreground hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary/50 after:transition-all hover:after:w-full"
                    }
                  `}
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className={`
                    relative py-1 transition-colors duration-300
                    ${pathname === "/about"
                      ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-primary"
                      : "text-muted-foreground hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary/50 after:transition-all hover:after:w-full"
                    }
                  `}
                >
                  About
                </Link>
              </div>
              
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-transparent group rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <ShoppingCart className="h-4 w-4 text-foreground transition-colors duration-300" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}


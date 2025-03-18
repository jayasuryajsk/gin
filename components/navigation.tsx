"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Determine if we're on the home page
  const isHomePage = pathname === "/"

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <div className={`${isHomePage ? 'bg-transparent' : 'bg-background/95 backdrop-blur-sm border-b'} transition-all duration-300`}>
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="text-lg sm:text-xl font-serif tracking-wide gradient-text hover:opacity-90 transition-opacity duration-300"
            >
              BLUE WING DISTILLERY
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="space-x-4 text-sm">
                <Link
                  href="/"
                  className={`
                    relative py-1 transition-colors duration-300
                    ${pathname === "/" 
                      ? "text-white after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-white" 
                      : "text-muted-foreground hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary/50 after:transition-all hover:after:w-full"
                    }
                  `}
                >
                  Home
                </Link>
                <Link
                  href="/products/native-citrus-gin"
                  className={`
                    relative py-1 transition-colors duration-300
                    ${pathname.includes("/products")
                      ? `${isHomePage ? "text-white" : "text-primary"} after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-${isHomePage ? "white" : "primary"}`
                      : `${isHomePage ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-${isHomePage ? "white/50" : "primary/50"} after:transition-all hover:after:w-full`
                    }
                  `}
                >
                  Shop
                </Link>
                <Link
                  href="/recipes"
                  className={`
                    relative py-1 transition-colors duration-300
                    ${pathname.includes("/recipes")
                      ? `${isHomePage ? "text-white" : "text-primary"} after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-${isHomePage ? "white" : "primary"}`
                      : `${isHomePage ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-${isHomePage ? "white/50" : "primary/50"} after:transition-all hover:after:w-full`
                    }
                  `}
                >
                  Recipes
                </Link>
                <Link
                  href="/about"
                  className={`
                    relative py-1 transition-colors duration-300
                    ${pathname === "/about"
                      ? `${isHomePage ? "text-white" : "text-primary"} after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-${isHomePage ? "white" : "primary"}`
                      : `${isHomePage ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"} after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-${isHomePage ? "white/50" : "primary/50"} after:transition-all hover:after:w-full`
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
                  <ShoppingCart className={`h-4 w-4 ${isHomePage ? 'text-white' : 'text-foreground'} transition-colors duration-300`} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center md:hidden">
              <Link href="/cart" className="mr-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-transparent group rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <ShoppingCart className={`h-4 w-4 ${isHomePage ? 'text-white' : 'text-foreground'} transition-colors duration-300`} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="hover:bg-transparent"
              >
                {mobileMenuOpen ? (
                  <X className={`h-5 w-5 ${isHomePage ? 'text-white' : 'text-foreground'}`} />
                ) : (
                  <Menu className={`h-5 w-5 ${isHomePage ? 'text-white' : 'text-foreground'}`} />
                )}
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 top-16 z-40 ${isHomePage ? 'bg-black/90' : 'bg-background'} md:hidden`}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6 text-lg">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`relative py-2 transition-colors duration-300 ${pathname === "/" ? "text-primary font-medium" : isHomePage ? "text-white" : "text-foreground"}`}
              >
                Home
              </Link>
              <Link
                href="/products/native-citrus-gin"
                onClick={() => setMobileMenuOpen(false)}
                className={`relative py-2 transition-colors duration-300 ${pathname.includes("/products") ? "text-primary font-medium" : isHomePage ? "text-white" : "text-foreground"}`}
              >
                Shop
              </Link>
              <Link
                href="/recipes"
                onClick={() => setMobileMenuOpen(false)}
                className={`relative py-2 transition-colors duration-300 ${pathname.includes("/recipes") ? "text-primary font-medium" : isHomePage ? "text-white" : "text-foreground"}`}
              >
                Recipes
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`relative py-2 transition-colors duration-300 ${pathname === "/about" ? "text-primary font-medium" : isHomePage ? "text-white" : "text-foreground"}`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


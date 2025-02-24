import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ConfirmationPage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Thank You for Your Order!</h2>
      <p className="mb-8">Your order has been successfully placed and is being processed.</p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  )
}


import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DistilleryTourPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Distillery Tour</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image src="/distillery.jpg" alt="DGIN Distillery" width={600} height={400} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience the Art of Gin Making</h2>
          <p className="mb-4">
            Join us for an immersive tour of our state-of-the-art distillery. Learn about our unique distillation
            process, the botanicals we use, and the history of gin making.
          </p>
          <p className="mb-4">
            Our expert guides will take you through each step of the gin-making process, from the selection of
            ingredients to the final bottling. You'll have the opportunity to see our custom-made copper stills up close
            and learn about the art and science behind creating our award-winning gins.
          </p>
          <p className="mb-6">
            The tour concludes with a guided tasting of our core range of gins, where you'll learn how to appreciate the
            subtle flavors and aromas that make each DGIN product unique.
          </p>
          <h3 className="text-xl font-semibold mb-2">Tour Details:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Duration: 90 minutes</li>
            <li>Price: $25 per person</li>
            <li>Includes: Guided tour and tasting session</li>
            <li>Available: Thursday to Sunday, 2pm and 4pm</li>
          </ul>
          <Button size="lg">Book a Tour</Button>
        </div>
      </div>
    </div>
  )
}


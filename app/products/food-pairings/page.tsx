import Image from "next/image"
import Link from "next/link"

export default function FoodPairingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Food Pairings for Blue Wing Native Citrus Gin</h1>
      <p className="mb-8 text-lg">
        Blue Wing Native Citrus Gin is a unique and versatile spirit that showcases the distinct flavours of Australian 
        citrus fruits such as mandarins, oranges, lemons, accompanied by mango, native sage and pepperberry. 
        Its vibrant and zesty profile makes it an exciting addition to various culinary pairings.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <div className="relative h-56">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Seafood Delicacies" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Seafood Delicacies</h2>
            <p className="mb-4">
              The bright and zesty notes of Blue Wing Native Citrus Gin pair beautifully with various seafood dishes. 
              Grilled barramundi, buttered prawns, or fresh lemon myrtle oysters are fantastic options. The citrus 
              flavours enhance the natural sweetness of the seafood, creating a harmonious palate experience. 
              A citrus-infused ceviche with finger limes can also amplify the gin's botanical notes.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <div className="relative h-56">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Poultry Dishes" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Poultry Dishes</h2>
            <p className="mb-4">
              Chicken and other poultry dishes benefit greatly from the refreshing tones of this gin. Consider pairing 
              it with grilled chicken marinated in a citrus and herb dressing. The gin's acidity cuts through the 
              richness of the poultry, providing a refreshing contrast. A roast chicken served with a zesty lemon 
              and bush herb sauce makes for an excellent pairing.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <div className="relative h-56">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Charcuterie and Cheeses" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Charcuterie and Cheeses</h2>
            <p className="mb-4">
              A charcuterie board featuring cured meats, such as prosciutto, salami, and smoked duck, along with a 
              selection of cheeses can be beautifully complemented by Australian Native Citrus Gin. Cheeses like 
              goat cheese or a tangy blue cheese work particularly well, as their creaminess balances the acidity 
              of the gin. Adding native Australian fruits, such as quandong, can enhance the overall flavour profile.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <div className="relative h-56">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Spicy Dishes" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Spicy Dishes</h2>
            <p className="mb-4">
              The refreshing nature of this gin can temper spiciness, making it a great match for dishes like spicy 
              Thai or Indian fare. Consider pairing it with a green curry chicken or a spicy lamb vindaloo. The 
              citrus notes can brighten the dish and offer a cooling effect against the heat.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <div className="relative h-56">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Desserts" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Desserts</h2>
            <p className="mb-4">
              Australian Native Citrus Gin can also work wonderfully in dessert pairings. Think of citrus tarts, 
              panna cotta infused with lemon myrtle, or a refreshing sorbet. The gin's flavour can elevate the 
              dessert experience, providing a sophisticated touch that enhances sweetness without being overwhelming.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <Link href="/products" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
          Back to Product
        </Link>
      </div>
    </div>
  )
} 
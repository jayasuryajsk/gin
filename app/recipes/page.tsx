import Image from "next/image"

const recipes = [
  {
    id: 1,
    name: "Australian Spritz",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "60ml (2 oz) Blue Wing Native Citrus Gin",
      "90ml (3 oz) chilled sparkling wine",
      "Splash of soda water",
      "Ice",
      "Finger lime slice for garnish"
    ],
    instructions:
      "Fill a wine glass with ice. Add the gin, top with chilled sparkling wine, and a splash of soda. Garnish with a slice of finger lime to enhance the citrus notes and add a pop of colour.",
    gin: "Blue Wing Native Citrus Gin",
  },
  {
    id: 2,
    name: "Citrus Gimlet",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "60ml (2 oz) Blue Wing Native Citrus Gin",
      "30ml (1 oz) fresh lime juice",
      "15ml (1/2 oz) sugar syrup",
      "Ice",
      "Lemon myrtle leaves for garnish"
    ],
    instructions:
      "Combine the gin with fresh lime juice and sugar syrup in a shaker with ice. Shake well and strain into a chilled cocktail glass. Garnish with a twist of lemon myrtle leaves for a fragrant finish.",
    gin: "Blue Wing Native Citrus Gin",
  },
  {
    id: 3,
    name: "Gin Fizz with a Twist",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "60ml (2 oz) Blue Wing Native Citrus Gin",
      "30ml (1 oz) fresh lemon juice",
      "15ml (1/2 oz) sugar syrup",
      "Soda water",
      "Ice",
      "Lemon zest twist and mint sprig for garnish"
    ],
    instructions:
      "In a shaker, combine the gin, fresh lemon juice, and sugar syrup. Shake with ice and strain into a highball glass filled with ice. Top with soda water and garnish with a lemon zest twist and a sprig of mint.",
    gin: "Blue Wing Native Citrus Gin",
  },
  {
    id: 4,
    name: "Bush Lemon Sour",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "60ml (2 oz) Blue Wing Native Citrus Gin",
      "22ml (3/4 oz) fresh lemon juice",
      "15ml (1/2 oz) sugar syrup",
      "Ice",
      "Dehydrated lemon wheel for garnish"
    ],
    instructions: 
      "Mix the gin, fresh lemon juice, and sugar syrup in a shaker with ice. Shake well and strain into an ice-filled rocks glass. Garnish with a dehydrated lemon wheel for an eye-catching presentation.",
    gin: "Blue Wing Native Citrus Gin",
  },
  {
    id: 5,
    name: "Tropical Citrus Collins",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "45ml (1.5 oz) Blue Wing Native Citrus Gin",
      "30ml (1 oz) fresh lime juice",
      "15ml (1/2 oz) passionfruit puree",
      "Tonic water",
      "Ice",
      "Eucalyptus sprig or finger lime slice for garnish"
    ],
    instructions:
      "Combine the gin, fresh lime juice, and passionfruit puree in a shaker with ice. Shake well and strain into a tall glass filled with ice. Top with tonic water and garnish with a sprig of eucalyptus or a slice of finger lime.",
    gin: "Blue Wing Native Citrus Gin",
  },
  {
    id: 6,
    name: "Native Citrus Negroni",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "30ml (1 oz) Blue Wing Native Citrus Gin",
      "30ml (1 oz) sweet vermouth",
      "30ml (1 oz) Campari",
      "Ice",
      "Lemon myrtle twist for garnish"
    ],
    instructions:
      "In a mixing glass, combine gin, sweet vermouth, and Campari. Stir with ice until chilled and strain into a rocks glass filled with ice. Garnish with a twist of lemon myrtle to enhance the gin's botanical qualities.",
    gin: "Blue Wing Native Citrus Gin",
  },
]

export default function RecipesPage() {
  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blue Wing Cocktail Recipes</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <Image src={recipe.image || "/placeholder.svg"} alt={recipe.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
                <p className="text-muted-foreground mb-2">Featuring: {recipe.gin}</p>
                <h3 className="font-semibold mb-1">Ingredients:</h3>
                <ul className="list-disc list-inside mb-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-muted-foreground">
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold mb-1">Instructions:</h3>
                <p className="text-muted-foreground">{recipe.instructions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


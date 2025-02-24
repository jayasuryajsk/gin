import Image from "next/image"

const recipes = [
  {
    id: 1,
    name: "Classic Gin & Tonic",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: ["50ml DGIN Classic London Dry", "150ml premium tonic water", "Ice", "Lemon or lime wedge"],
    instructions:
      "Fill a highball glass with ice. Pour in the gin, then top with tonic water. Gently stir and garnish with a lemon or lime wedge.",
    gin: "DGIN Classic London Dry",
  },
  {
    id: 2,
    name: "Botanical Bliss Fizz",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "50ml DGIN Botanical Bliss",
      "25ml elderflower liqueur",
      "15ml fresh lemon juice",
      "Soda water",
      "Ice",
      "Edible flowers for garnish",
    ],
    instructions:
      "Shake the gin, elderflower liqueur, and lemon juice with ice. Strain into an ice-filled glass, top with soda water, and garnish with edible flowers.",
    gin: "DGIN Botanical Bliss",
  },
  {
    id: 3,
    name: "Spiced Negroni",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: ["30ml DGIN Spiced Journey", "30ml sweet vermouth", "30ml Campari", "Ice", "Orange twist"],
    instructions:
      "Stir all ingredients with ice in a mixing glass. Strain into a rocks glass over a large ice cube. Garnish with an orange twist.",
    gin: "DGIN Spiced Journey",
  },
  {
    id: 4,
    name: "Citrus Splash Gimlet",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "60ml DGIN Citrus Splash",
      "30ml fresh lime juice",
      "15ml simple syrup",
      "Ice",
      "Lime wheel for garnish",
    ],
    instructions: "Shake all ingredients with ice. Strain into a chilled coupe glass. Garnish with a lime wheel.",
    gin: "DGIN Citrus Splash",
  },
  {
    id: 5,
    name: "Barrel-Aged Old Fashioned",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: [
      "60ml DGIN Barrel-Aged Reserve",
      "10ml simple syrup",
      "2 dashes Angostura bitters",
      "Ice",
      "Orange peel for garnish",
    ],
    instructions:
      "In a mixing glass, combine gin, simple syrup, and bitters. Add ice and stir until well-chilled. Strain into a rocks glass over a large ice cube. Express the orange peel over the drink and drop it in as garnish.",
    gin: "DGIN Barrel-Aged Reserve",
  },
  {
    id: 6,
    name: "Navy Strength Martini",
    image: "/placeholder.svg?height=400&width=600",
    ingredients: ["60ml DGIN Navy Strength", "10ml dry vermouth", "Ice", "Lemon twist or olive for garnish"],
    instructions:
      "Fill a mixing glass with ice. Add gin and vermouth. Stir well until chilled. Strain into a chilled martini glass. Garnish with a lemon twist or olive.",
    gin: "DGIN Navy Strength",
  },
]

export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cocktail Recipes</h1>
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
  )
}


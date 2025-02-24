export interface Gin {
  id: number
  name: string
  price: number
  image: string
  description: string
  abv: number
  volume: number
  tastingNotes: string[]
  pairings: string[]
  awards?: string[]
  ingredients: string[]
  story: string
}

export const gins: Gin[] = [
  {
    id: 1,
    name: "DGIN Classic London Dry",
    price: 39.99,
    image: "/images/classic-london-dry.jpg",
    description: "A timeless blend of juniper and citrus notes, perfect for classic cocktails.",
    abv: 43,
    volume: 700,
    tastingNotes: ["Juniper", "Citrus", "Coriander", "Angelica root"],
    pairings: ["Tonic water", "Lemon", "Cucumber"],
    awards: ["Gold Medal - San Francisco World Spirits Competition 2022"],
    ingredients: ["Juniper berries", "Coriander seeds", "Angelica root", "Orris root", "Lemon peel", "Lime peel"],
    story:
      "Our Classic London Dry is a tribute to the timeless gin tradition. Crafted with precision and care, it embodies the essence of what a great gin should be.",
  },
  {
    id: 2,
    name: "DGIN Botanical Bliss",
    price: 44.99,
    image: "/images/botanical-bliss.jpg",
    description:
      "Infused with rare herbs and flowers for a unique taste that will transport you to a botanical garden.",
    abv: 41,
    volume: 700,
    tastingNotes: ["Lavender", "Rose", "Chamomile", "Elderflower"],
    pairings: ["Elderflower tonic", "Strawberries", "Mint"],
    ingredients: ["Juniper berries", "Lavender", "Rose petals", "Chamomile flowers", "Elderflower", "Coriander seeds"],
    story:
      "Inspired by the lush gardens of England, Botanical Bliss is a floral symphony in a bottle. Each sip is a journey through a blooming meadow.",
  },
  {
    id: 3,
    name: "DGIN Barrel-Aged Reserve",
    price: 54.99,
    image: "/images/barrel-aged-reserve.jpg",
    description: "Aged in oak barrels for a smooth, complex flavor with hints of vanilla and spice.",
    abv: 45,
    volume: 700,
    tastingNotes: ["Vanilla", "Oak", "Caramel", "Juniper"],
    pairings: ["Neat", "On the rocks", "Whiskey-based cocktails"],
    awards: ["Double Gold - New York International Spirits Competition 2023"],
    ingredients: ["Juniper berries", "Coriander seeds", "Angelica root", "Cassia bark", "Vanilla pods"],
    story:
      "Our Barrel-Aged Reserve spends six months in carefully selected oak barrels, resulting in a gin that bridges the gap between traditional gin and aged spirits.",
  },
  {
    id: 4,
    name: "DGIN Limited Edition",
    price: 79.99,
    image: "/images/limited-edition.jpg",
    description: "Our master distiller's special yearly creation, featuring rare botanicals and innovative techniques.",
    abv: 47,
    volume: 500,
    tastingNotes: ["Saffron", "Cardamom", "Yuzu", "Pink peppercorn"],
    pairings: ["Premium tonic", "Orange peel", "Star anise"],
    ingredients: [
      "Juniper berries",
      "Saffron threads",
      "Cardamom pods",
      "Yuzu peel",
      "Pink peppercorns",
      "Grains of paradise",
    ],
    story:
      "Each year, our master distiller creates a unique gin that pushes the boundaries of flavor. This limited edition is a collector's item for gin enthusiasts.",
  },
  {
    id: 5,
    name: "DGIN Citrus Splash",
    price: 42.99,
    image: "/images/citrus-splash.jpg",
    description:
      "A refreshing blend with pronounced notes of lemon, lime, and grapefruit. Perfect for summer cocktails.",
    abv: 40,
    volume: 700,
    tastingNotes: ["Lemon", "Lime", "Grapefruit", "Juniper"],
    pairings: ["Mediterranean tonic", "Citrus fruits", "Basil"],
    ingredients: ["Juniper berries", "Lemon peel", "Lime peel", "Grapefruit peel", "Coriander seeds", "Lemongrass"],
    story:
      "Citrus Splash was born from the idea of capturing the essence of a sun-drenched citrus grove. It's summer in a glass, any time of the year.",
  },
  {
    id: 6,
    name: "DGIN Spiced Journey",
    price: 47.99,
    image: "/images/spiced-journey.jpg",
    description: "An aromatic gin with a blend of exotic spices, creating a warm and complex flavor profile.",
    abv: 43,
    volume: 700,
    tastingNotes: ["Cinnamon", "Nutmeg", "Black pepper", "Ginger"],
    pairings: ["Ginger ale", "Orange slice", "Cinnamon stick"],
    ingredients: ["Juniper berries", "Cinnamon bark", "Nutmeg", "Black peppercorns", "Ginger root", "Cardamom pods"],
    story:
      "Spiced Journey is our tribute to the ancient spice routes. Each botanical has been carefully selected to take you on a flavor expedition around the world.",
  },
  {
    id: 7,
    name: "DGIN Navy Strength",
    price: 59.99,
    image: "/images/navy-strength.jpg",
    description: "A bold, high-proof gin that holds its character even when mixed. Not for the faint-hearted.",
    abv: 57,
    volume: 700,
    tastingNotes: ["Juniper", "Citrus", "Pepper", "Licorice"],
    pairings: ["Strong tonic", "Lime", "In cocktails"],
    ingredients: ["Juniper berries", "Coriander seeds", "Angelica root", "Cassia bark", "Licorice root", "Orange peel"],
    story:
      "Our Navy Strength gin pays homage to the seafaring tradition of high-proof spirits. It's a gin that stands up to any mixer and any adventure.",
  },
  {
    id: 8,
    name: "DGIN Old Tom",
    price: 49.99,
    image: "/images/old-tom.jpg",
    description:
      "A slightly sweetened gin style that bridges the gap between Dutch Genever and London Dry. Perfect for classic cocktails.",
    abv: 42,
    volume: 700,
    tastingNotes: ["Juniper", "Licorice", "Citrus", "Subtle sweetness"],
    pairings: ["Martinez cocktail", "Tom Collins", "Neat"],
    ingredients: ["Juniper berries", "Licorice root", "Lemon peel", "Orange peel", "Coriander seeds", "Star anise"],
    story:
      "Our Old Tom gin is a revival of a classic style, popular in the 18th century. It's the key to unlocking the authentic taste of many vintage cocktail recipes.",
  },
]


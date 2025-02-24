import Image from "next/image"

const ginInfo = [
  {
    title: "What is Gin?",
    content:
      "Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries. It originated as a medicinal liquor made by monks and alchemists across Europe, particularly in Southern France, Flanders and the Netherlands, to provide aqua vita from distillates of grapes and grains.",
    image:
      "https://images.unsplash.com/photo-1608885898957-a1a0c2b56704?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Types of Gin",
    content:
      "There are several types of gin, including London Dry, Plymouth, Old Tom, and Genever. Each has its own distinct characteristics and production methods. London Dry, despite its name, can be produced anywhere in the world and is known for its juniper-forward flavor profile.",
    image:
      "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "How Gin is Made",
    content:
      "Gin is typically made by distilling a neutral grain spirit with juniper berries and other botanicals. The exact recipe and method can vary, but the presence of juniper is essential. Some gins are distilled with the botanicals in the still, while others infuse the botanicals after distillation.",
    image:
      "https://images.unsplash.com/photo-1609951651556-5334e2706bb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Tasting Gin",
    content:
      "When tasting gin, consider its aroma, flavor, and finish. Look for the juniper notes, as well as any other prominent botanicals. The texture and mouthfeel are also important. Try tasting gin neat, with a splash of water, and in a classic cocktail like a Gin & Tonic to fully appreciate its character.",
    image:
      "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
]

export default function Gin101Page() {
  return (
    <div className="container mx-auto px-4 py-8 text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Gin 101: Everything You Need to Know</h1>
      {ginInfo.map((info, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{info.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-foreground">{info.content}</p>
            <div className="relative aspect-video">
              <Image src={info.image || "/placeholder.svg"} alt={info.title} fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


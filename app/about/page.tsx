import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About DGIN</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            DGIN is a premium craft gin distillery founded in 2020. Our passion is creating unique, high-quality gins
            that push the boundaries of flavor while respecting the rich traditions of gin making.
          </p>
          <p className="mb-4">
            Each bottle of DGIN is carefully crafted using a blend of traditional botanicals and innovative ingredients,
            resulting in a range of gins that are both familiar and excitingly new.
          </p>
          <p>
            From our classic London Dry to our experimental limited editions, we strive to offer something special for
            every gin enthusiast.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image src="/distillery.jpg" alt="DGIN Distillery" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  )
}


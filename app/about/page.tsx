import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">About Blue Wing Distillery</h1>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <p className="mb-4">
              Welcome to Blue Wing Distillery, where tradition meets innovation in the heart of Australia.
            </p>
            <p className="mb-4">
              Founded by a passionate Army veteran and a skilled chemical engineer, our distillery embodies a unique blend of dedication, 
              craftsmanship, and a love for exceptional Gin. At Blue Wing, we are committed to producing small-batch, premium gin that 
              captures the essence of our Australian landscape.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image 
              src="/distillery.jpg" 
              alt="Blue Wing Distillery" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-lg" 
            />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Story</h2>
        <p className="mb-6 sm:mb-8">
          Our journey began with a shared vision: to create a gin that reflects the rich flavours and botanicals of Australia. 
          Drawing on Matt's military precision and Shima's expertise in chemistry, we have crafted distinct recipes that highlight 
          the unique characteristics of local ingredients.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h2>
        <p className="mb-6 sm:mb-8">
          At Blue Wing, our mission is to create high-quality, handcrafted Gin while celebrating the rich heritage of our Australian community. 
          We aim to provide Gin lovers with a taste experience that is both distinctive and unforgettable.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-6 sm:mb-8">
          <li className="mb-2">
            <span className="font-semibold">Quality:</span> We believe in meticulous attention to detail. Every bottle of gin is crafted with 
            the finest locally sourced ingredients to ensure the highest quality.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Heritage:</span> Our story is rooted in the diverse backgrounds of our founders, and we honor 
            this heritage by incorporating local traditions and flavors into our gin.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Community:</span> We are proud to be part of the New South Wales community and are dedicated to 
            supporting local farmers and businesses.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Meet the Team</h2>
        <p className="mb-6 sm:mb-8">
          Together, Matt, our veteran founder, brings resilience and a commitment to excellence, while Shima, our chemical engineer, 
          applies scientific rigor to the art of distilling. This dynamic pairing allows us to continually innovate and refine our craft.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Join Us</h2>
        <p className="mb-4">
          We invite you to experience the unparalleled flavours of Blue Wing. Whether you're enjoying a gin and tonic or exploring our 
          exclusive blends, we promise a taste that tells a story. Find our products at select retailers across Australia.
        </p>
        <p className="mb-4">
          Thank you for being part of our journey. We look forward to sharing our passion for gin with you!
        </p>
      </div>
    </main>
  )
}


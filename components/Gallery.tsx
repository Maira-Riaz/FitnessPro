import Image from "next/image"

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Our Facility</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


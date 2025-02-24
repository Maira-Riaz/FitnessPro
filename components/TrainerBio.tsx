import Image from "next/image"

export default function TrainerBio() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
              alt="Trainer"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Meet Our Lead Trainer</h2>
            <p className="text-lg mb-4 text-gray-300">
              John Doe has been in the fitness industry for over 15 years, helping clients achieve their fitness goals
              through personalized training programs and nutrition advice.
            </p>
            <p className="text-lg text-gray-300">
              With certifications in personal training, nutrition, and sports medicine, John brings a wealth of
              knowledge and experience to every session.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


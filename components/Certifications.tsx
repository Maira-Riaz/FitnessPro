import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    "Certified Personal Trainer (NASM)",
    "Certified Nutrition Coach (Precision Nutrition)",
    "Certified Strength and Conditioning Specialist (NSCA)",
    "Certified Functional Strength Coach",
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center glassmorphism p-6">
              <Award className="w-8 h-8 mr-4 text-primary" />
              <span className="text-lg">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


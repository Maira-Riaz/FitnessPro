import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Zap, Heart } from "lucide-react"

const programs = [
  {
    title: "Weight Loss",
    description: "A comprehensive program designed to help you shed those extra pounds and keep them off.",
    icon: Dumbbell,
  },
  {
    title: "Muscle Building",
    description: "Build lean muscle mass and increase your strength with our specialized training program.",
    icon: Users,
  },
  {
    title: "HIIT Training",
    description: "High-intensity interval training for maximum fat burn and improved cardiovascular health.",
    icon: Zap,
  },
  {
    title: "Wellness & Recovery",
    description: "Focus on overall wellness, flexibility, and proper recovery techniques.",
    icon: Heart,
  },
]

export default function ProgramsList() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="card-hover glassmorphism">
              <CardHeader>
                <program.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


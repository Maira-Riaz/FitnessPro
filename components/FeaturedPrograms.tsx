"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Salad, Zap } from "lucide-react"

const programs = [
  {
    title: "Weight Loss",
    description: "Shed those extra pounds with our specialized program.",
    icon: Dumbbell,
  },
  {
    title: "Muscle Building",
    description: "Build lean muscle mass and increase your strength.",
    icon: Users,
  },
  {
    title: "Nutrition Planning",
    description: "Get a personalized meal plan to support your fitness goals.",
    icon: Salad,
  },
  {
    title: "HIIT Training",
    description: "High-intensity interval training for maximum results.",
    icon: Zap,
  },
]

export default function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover glassmorphism">
                <CardHeader>
                  <program.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{program.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


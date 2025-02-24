"use client"
import { motion } from "framer-motion"
import { IconBarbell, IconUsers, IconSalad, IconDeviceLaptop } from "@tabler/icons-react"

export default function ServicesSection() {
  const services = [
    {
      title: "1-on-1 Training",
      description: "Personalized workout sessions tailored to your goals.",
      icon: IconBarbell,
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts for motivation and community.",
      icon: IconUsers,
    },
    {
      title: "Nutrition Planning",
      description: "Custom meal plans to complement your fitness routine.",
      icon: IconSalad,
    },
    {
      title: "Online Coaching",
      description: "Remote training and support for busy lifestyles.",
      icon: IconDeviceLaptop,
    },
  ]

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Services & Workout Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-3d glassmorphism p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <service.icon className="w-16 h-16 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-gradient">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


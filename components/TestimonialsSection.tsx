"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import "swiper/css"

const testimonials = [
  {
    name: "John D.",
    text: "I've never felt better! This program changed my life.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    role: "Lost 30 lbs",
  },
  {
    name: "Sarah M.",
    text: "The personalized approach made all the difference for me.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    role: "Gained muscle mass",
  },
  {
    name: "Mike R.",
    text: "I achieved results I never thought possible. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    role: "Fitness enthusiast",
  },
  {
    name: "Emily L.",
    text: "The support and motivation I received were incredible.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    role: "Marathon runner",
  },
  {
    name: "David W.",
    text: "I'm stronger, healthier, and more confident than ever before.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    role: "Transformed lifestyle",
  },
]

// Duplicate testimonials for continuous scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials]

export default function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="testimonials" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Client Testimonials</h2>
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div
            className="flex gap-6"
            animate={{
              x: isHovered ? 0 : "-50%",
            }}
            transition={{
              duration: isHovered ? 0 : 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] glassmorphism p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-[60px] h-[60px]">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-4">{testimonial.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


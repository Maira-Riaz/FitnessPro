"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
              alt="Personal Trainer"
              width={600}
              height={800}
              className="rounded-lg shadow-xl animate-float object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gradient">About FitnessPro</h2>
            <p className="text-lg mb-6 text-gray-300">
              At FitnessPro, we're dedicated to helping you achieve your fitness goals. Our team of experienced trainers
              combines cutting-edge workout techniques with personalized nutrition plans to transform your body and
              boost your confidence.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Whether you're looking to lose weight, build muscle, or improve your overall health, we're here to guide
              you every step of the way. Let's work together to unlock your full potential and create lasting change in
              your life.
            </p>
            <Link href="/about">
              <Button size="lg" className="glow-button">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


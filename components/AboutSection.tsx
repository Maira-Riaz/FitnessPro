"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="glassmorphism p-8 flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/trainer.jpg"
              alt="Personal Trainer"
              width={400}
              height={400}
              className="rounded-full animate-float"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-lg mb-4">
              As a dedicated personal trainer with over 10 years of experience, I'm committed to helping you achieve
              your fitness goals. My approach combines cutting-edge workout techniques with personalized nutrition plans
              to transform your body and boost your confidence.
            </p>
            <p className="text-lg mb-4">
              Whether you're looking to lose weight, build muscle, or improve your overall health, I'm here to guide you
              every step of the way. Let's work together to unlock your full potential and create lasting change in your
              life.
            </p>
            <motion.button className="glow-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 1000)
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Contact Us</h2>
        <motion.form
          onSubmit={handleSubmit}
          className={`max-w-lg mx-auto ${isShaking ? "animate-shake" : ""}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 neumorphic rounded" required />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 neumorphic rounded" required />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-2 neumorphic rounded" rows={4} required></textarea>
          </div>
          <motion.button
            type="submit"
            className="glow-button w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}


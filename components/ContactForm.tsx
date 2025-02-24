"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glassmorphism p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-gradient">Send us a message</h2>
      <div className="space-y-4">
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Input type="tel" placeholder="Your Phone (optional)" />
        <Textarea placeholder="Your Message" rows={4} required />
        <Button type="submit" className="w-full glow-button">
          Send Message
        </Button>
      </div>
    </motion.form>
  )
}


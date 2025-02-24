"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="glassmorphism p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join FitnessPro today and start your journey towards a healthier, stronger you.
          </p>
          <Link href="/contact">
            <Button className="glow-button">
              Get Started Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


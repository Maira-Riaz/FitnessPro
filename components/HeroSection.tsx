"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Transform Your Body, Transform Your Life"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden parallax-bg">
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        alt="Fitness background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {typedText}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Achieve your fitness goals with personalized training
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/programs">
            <Button size="lg" className="glow-button">
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


"use client"
import { motion } from "framer-motion"

export default function ParticleAnimation() {
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary rounded-full opacity-50"
          style={{
            width: Math.random() * 5 + "px",
            height: Math.random() * 5 + "px",
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}


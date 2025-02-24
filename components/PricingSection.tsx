"use client"
import { motion } from "framer-motion"

export default function PricingSection() {
  const plans = [
    { name: "Basic", price: "$49", features: ["2 sessions/week", "Basic meal plan", "Email support"] },
    {
      name: "Pro",
      price: "$99",
      features: ["4 sessions/week", "Advanced meal plan", "24/7 support", "Progress tracking"],
    },
    {
      name: "Elite",
      price: "$149",
      features: ["6 sessions/week", "Custom meal plan", "1-on-1 coaching", "Exclusive app access"],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-xl">/month</span>
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button className="glow-button w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


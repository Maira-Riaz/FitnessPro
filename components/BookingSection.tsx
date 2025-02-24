"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", { date: selectedDate, time: selectedTime })
    alert("Booking submitted successfully!")
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Book a Session</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glassmorphism p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-2 neumorphic rounded"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium mb-2">
              Select Time
            </label>
            <select
              id="time"
              className="w-full p-2 neumorphic rounded"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Choose a time</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
          <motion.button
            type="submit"
            className="glow-button w-full mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default BookingSection


"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    })
    setEmail("")
  }

  return (
    <div className="glassmorphism p-6">
      <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
      <p className="mb-4 text-gray-300">Get the latest fitness tips and updates delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  )
}


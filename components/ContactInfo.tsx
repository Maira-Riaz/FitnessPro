import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="glassmorphism p-8">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="w-6 h-6 mr-4 text-primary" />
          <span>(123) 456-7890</span>
        </div>
        <div className="flex items-center">
          <Mail className="w-6 h-6 mr-4 text-primary" />
          <span>info@fitnesspro.com</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-4 text-primary" />
          <span>123 Fitness Street, Gym City, 12345</span>
        </div>
      </div>
    </div>
  )
}


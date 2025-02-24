import type { Metadata } from "next"
import ContactHero from "@/components/ContactHero"
import ContactForm from "@/components/ContactForm"
import LocationMap from "@/components/LocationMap"
import ContactInfo from "@/components/ContactInfo"

export const metadata: Metadata = {
  title: "Contact - FitnessPro",
  description: "Get in touch with us for personalized fitness guidance",
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </div>
    </>
  )
}


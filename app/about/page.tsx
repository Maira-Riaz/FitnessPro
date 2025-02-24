import type { Metadata } from "next"
import AboutHero from "@/components/AboutHero"
import TrainerBio from "@/components/TrainerBio"
import Certifications from "@/components/Certifications"
import Philosophy from "@/components/Philosophy"
import Timeline from "@/components/Timeline"
import Gallery from "@/components/Gallery"
import CtaSection from "@/components/CtaSection"

export const metadata: Metadata = {
  title: "About - FitnessPro",
  description: "Learn about our experienced trainers and fitness philosophy",
}

export default function About() {
  return (
    <>
      <AboutHero />
      <TrainerBio />
      <Certifications />
      <Philosophy />
      <Timeline />
      <Gallery />
      <CtaSection />
    </>
  )
}


import type { Metadata } from "next"
import ProgramsHero from "@/components/ProgramsHero"
import ProgramsList from "@/components/ProgramsList"
import ProgramComparison from "@/components/ProgramComparison"
import FAQ from "@/components/FAQ"
import CtaSection from "@/components/CtaSection"

export const metadata: Metadata = {
  title: "Training Programs - FitnessPro",
  description: "Explore our comprehensive fitness programs tailored to your goals",
}

export default function Programs() {
  return (
    <>
      <ProgramsHero />
      <ProgramsList />
      <ProgramComparison />
      <FAQ />
      <CtaSection />
    </>
  )
}


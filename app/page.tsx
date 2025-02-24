import HeroSection from "@/components/HeroSection"
import FeaturedPrograms from "@/components/FeaturedPrograms"
import AboutPreview from "@/components/AboutPreview"
import TransformationsSection from "@/components/TransformationsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CtaSection from "@/components/CtaSection"
import BlogPreview from "@/components/BlogPreview"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPrograms />
      <AboutPreview />
      <TransformationsSection />
      <TestimonialsSection />
      <BlogPreview />
      <CtaSection />
    </>
  )
}


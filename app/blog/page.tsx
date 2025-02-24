import type { Metadata } from "next"
import BlogHero from "@/components/BlogHero"
import BlogGrid from "@/components/BlogGrid"
import Categories from "@/components/Categories"
import Newsletter from "@/components/Newsletter"

export const metadata: Metadata = {
  title: "Blog - FitnessPro",
  description: "Latest fitness tips, workout guides, and nutrition advice",
}

export default function Blog() {
  return (
    <>
      <BlogHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="space-y-8">
            <Categories />
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  )
}


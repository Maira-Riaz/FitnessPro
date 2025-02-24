"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "10 Essential Exercises for Building a Strong Core",
    excerpt:
      "Master these fundamental exercises to strengthen your core and improve overall fitness. Perfect for beginners and advanced athletes alike.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    date: "May 15, 2023",
    slug: "essential-core-exercises",
  },
  {
    title: "Complete Guide to Proper Nutrition for Muscle Growth",
    excerpt:
      "Discover the optimal nutrition strategy to support muscle growth and recovery. Learn about macros, timing, and supplement basics.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    date: "June 2, 2023",
    slug: "nutrition-muscle-growth",
  },
  {
    title: "Maximizing Results with HIIT: A Beginner's Guide",
    excerpt:
      "Learn how to structure your HIIT workouts for maximum fat burn and improved cardiovascular fitness. Includes sample workout plans.",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798",
    date: "June 20, 2023",
    slug: "hiit-beginners-guide",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover glassmorphism flex flex-col h-full">
                <div className="relative aspect-video">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                    priority
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold min-h-[4rem] mb-3">{post.title}</h3>
                  <p className="text-gray-400 min-h-[6rem] mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline">Read More</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" className="glow-button">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


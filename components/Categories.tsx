import { Button } from "@/components/ui/button"
import Link from "next/link"
import { routes } from "@/lib/routes"

export default function Categories() {
  const categories = [
    { name: "Workouts", href: routes.blog.categories.workouts },
    { name: "Nutrition", href: routes.blog.categories.nutrition },
    { name: "Weight Loss", href: routes.blog.categories.weightLoss },
    { name: "Muscle Building", href: routes.blog.categories.muscleBuilding },
    { name: "Recovery", href: routes.blog.categories.recovery },
    { name: "Motivation", href: routes.blog.categories.motivation },
  ]

  return (
    <div className="glassmorphism p-6">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Button variant="outline" size="sm">
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}


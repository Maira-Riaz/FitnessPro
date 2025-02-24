import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { routes } from "@/lib/routes"

const Footer = () => {
  return (
    <footer className="bg-card text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FitnessPro</h3>
            <p className="mb-4">Transform your body, transform your life with our expert personal training services.</p>
            <div className="flex space-x-4">
              <a
                href={routes.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook />
              </a>
              <a
                href={routes.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram />
              </a>
              <a
                href={routes.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href={routes.home} className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href={routes.programs.index} className="hover:text-gray-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link href={routes.about} className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href={routes.blog.index} className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={routes.contact} className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href={routes.programs.weightLoss} className="hover:text-gray-300">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href={routes.programs.muscleBuilding} className="hover:text-gray-300">
                  Muscle Building
                </Link>
              </li>
              <li>
                <Link href={routes.programs.beginners} className="hover:text-gray-300">
                  Fitness for Beginners
                </Link>
              </li>
              <li>
                <Link href={routes.programs.advanced} className="hover:text-gray-300">
                  Advanced Training
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Fitness Street, Gym City, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <Link href="mailto:info@fitnesspro.com" className="mb-2 hover:text-gray-300">
              Email: info@fitnesspro.com
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FitnessPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


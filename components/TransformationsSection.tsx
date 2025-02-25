"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function TransformationsSection() {
  const transformations = [
    {
      before: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      after: "https://images.unsplash.com/photo-1704223523321-7b0b44a1a0b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJvZHlidWlsZGluZyUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
      title: "John&apos;s 12-Week Transformation",
      description: "Lost 30 lbs and gained muscle",
    },
    {
      before: "https://plus.unsplash.com/premium_photo-1664884165084-b538fc44bed4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      after: "https://plus.unsplash.com/premium_photo-1674059550127-91a5aa9d1195?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sarah&apos;s Fitness Journey",
      description: "Gained strength and confidence",
    },
    {
      before: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5vcm1hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      after: "https://images.unsplash.com/photo-1708011087528-e287b6ec6628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxib2R5YnVpbGRpbmclMjBtYWxlfGVufDB8fDB8fHww",
      title: "Mike&apos;s Amazing Progress",
      description: "Complete body transformation",
    },
  ]

  return (
    <section id="transformations" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Client Transformations</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="[&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!mt-8"
          >
            {transformations.map((item, index) => (
              <SwiperSlide key={index} className="pb-12">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-6 text-center">{item.title}</h3>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="relative aspect-[3/4] w-full md:w-[400px]">
                      <Image
                        src={item.before || "/placeholder.svg"}
                        alt="Before transformation"
                        fill
                        className="rounded-lg shadow-xl object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-2 rounded-full">
                        Before
                      </div>
                    </div>
                    <div className="relative aspect-[3/4] w-full md:w-[400px]">
                      <Image
                        src={item.after || "/placeholder.svg"}
                        alt="After transformation"
                        fill
                        className="rounded-lg shadow-xl object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-secondary/90 text-white px-4 py-2 rounded-full">
                        After
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-lg text-center text-gray-300">{item.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}


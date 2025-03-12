import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from '../ui/TestimonialCard'
import localFont from 'next/font/local'

const headerFont = localFont({
  src: "../../fonts/grifterbold700.otf",
})

const TestimonialSection = () => {
  
  const testimonials = [
    {
      name: "Stella James",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "May 14, 2024",
      profileImg: "/profile1.svg"
    },
    {
      name: "John Doe",
      testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "June 22, 2024",
      profileImg: "/profile1.svg"
    },
    {
      name: "Emily Smith",
      testimonial: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "July 3, 2024",
      profileImg: "/profile1.svg"
    }
  ]

  return (
    <section className="flex flex-col justify-center items-center gap-6 py-12">
      <h2 className={`${headerFont.className} text-3xl text-center`}>
        Testimonials
      </h2>
      
      <span className="text-sm bg-gray-300 border-gray-500 shadow-md px-5 py-2 rounded-full">
        Don&apos;t just take our word for it
      </span>
      
      <h3 className="text-2xl font-semibold text-center w-4/5 md:w-full">
        Hear From Other Customers Who Use KuraBill
      </h3>
      
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl px-4"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <Card>
                <CardContent className="flex aspect-rectangle items-center justify-center p-3">
                  <TestimonialCard
                    TestimonialName={testimonial.name}
                    testimonial={testimonial.testimonial}
                    testimonialDate={testimonial.date}
                    profileImg={testimonial.profileImg}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default TestimonialSection
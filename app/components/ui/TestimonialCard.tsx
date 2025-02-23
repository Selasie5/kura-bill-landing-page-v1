import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({TestimonialName, testimonial, testimonialDate, profileImg}: {
  TestimonialName:string,
  testimonial:string,
  testimonialDate:string,
  profileImg:string
}) => {
  return (
    <div className="p-4 border border-primary bg-white rounded-md flex flex-col justify-between items-start gap-4  ">
        <div className="flex justify-start items-start">
            <Image src={profileImg} alt="user-profile" width={50} height={50}/>
            <div className='flex flex-col justify-start items-center'>
              <span>
                {TestimonialName}
              </span>
              {/* //Dynamic Stars Rating out of 5 stars based on a user rating prop */}
            

            </div>
        </div>
        <div className="flex justify-start items-start">
            <p className="text-sm text-gray-500">{testimonial} </p>
            </div>

            <div>
              <span className='text-gray-500 text-md'>
              {testimonialDate}
              </span>
             
              </div>
    </div>
  )
}

export default TestimonialCard

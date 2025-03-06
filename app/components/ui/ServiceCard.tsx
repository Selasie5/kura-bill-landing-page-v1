import React from 'react'
import { MoveRight } from 'lucide-react'

const ServiceCard = ({serviceTitle, serviceDesc}: {
    serviceTitle:string,
    serviceDesc:string,
}) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start gap-4 p-4 group bg-white border border-b-gray-300'>
        <div className='md:w-1/3 w-full'>
        <h2 className= "text-2xl font-bold">{serviceTitle}</h2>
            </div>
     
     <div className='w-full md:w-1/2'>
     <p>{serviceDesc}</p>
     </div>
        
        <div className='w-1/6 flex justify-end items-center'>
        <div className="hidden md:block group-hover:transform group-hover:-rotate-45 transition-transform bg-gray-200 w-10 h-10  p-2 rounded-full group-hover:bg-green-500">
            <MoveRight size={24} className='text-white' />
        </div>
        </div>
        
    </div>
  )
}

export default ServiceCard

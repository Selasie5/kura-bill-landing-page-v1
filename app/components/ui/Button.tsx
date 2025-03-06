import React from 'react'
interface Button {
  onclick:()=>void
}
const Button: React.FC<Button> = ({ onclick }) => {
  return (
    <button className='bg-primary-brand text-white text-sm font-normal px-7 py-3 rounded-full' onClick={onclick}>
      Join Waitlist
    </button>
  )
}

export default Button

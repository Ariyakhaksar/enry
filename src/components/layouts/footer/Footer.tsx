import React from 'react'
import { GoHeartFill } from 'react-icons/go'

function Footer() {
  return (
    <div className='w-full flex flex-row gap-2 justify-center items-center font-bold bg-zinc-100 py-5'>
      <span>ساخته شده با</span>
      <span className='text-main'><GoHeartFill /></span> 
      <span>علیرضا خاکسار</span> 
    </div>
  )
}

export default Footer
import React from 'react'
import { ctaimage } from '../assets'

const CTA = () => {
  return (
    <div className='mx-[195px]'>
    <div className='bg-[#474f4f] w-[900px] h-[318px] rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] inline-flex'>
      <img src={ctaimage} className='rounded-l-[50px] pr-[20px] w-[350px] h-[318px]'/>
        <h4 className='text-white pt-[61px] pl-[40px] text-[36px] leading-[59.8px]'>Blending creativity and <br/>functionality in every design</h4>
    </div>
    </div>
  )
}

export default CTA
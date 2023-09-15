import React from 'react'

const Stats = () => {
  return (
    <div className='mx-[195px]'>
      <div className='inline-flex space-x-5'>
        <div className="pb-[100px] inline-flex space-x-5 ">
            <img className="h-[442px] md:h-[332px] md:w-[182px] w-[243px]" src="https://imgur.com/OZrZZDW.jpg" />
            <img className="h-[442px] w-[243px] md:h-[332px] md:w-[182px]" src="https://imgur.com/kvJtBZd.jpg" />
               
        </div>
        <div className='h-[243px] w-[243px]'>
          <img className="rounded-tr-[50px] h-[243px] w-[243px] md:h-[182px] md:w-[182px]" src="https://imgur.com/8vKbCgk.jpg" /> 
        </div>
      </div>
        <div className=' w-[229px] absolute -bottom-3 right-[120px]'>
          <button className='border-[1px] border-[#6D7D7D] rounded-[100px] px-[14px] text-white text-[12px]'><span className='tracking-[0.4em] font-light leading-[23.92px]'>LEARN ABOU</span>T</button>
        </div>
          
        <div className='bg-purple-200 inline-grid grid-flow-row'>
          <div className='bg-red-100 w-[130px] h-[110px]'>
            <h4 className='text-[#6D7D7D] text-[40px]'>2k+</h4>
            <p className='whitespace-normal mr-[440px] text-white text-[16px] tracking-[0.4em]'>Projects done</p>
          </div>
          <div className='w-[130px] h-[110px]'>
            <h4 className='text-[#6D7D7D] text-[40px]'>20+</h4>
            <p className='whitespace-normal mr-[440px] text-white text-[16px] tracking-[0.4em]'>Pro teams</p>
          </div>
          <div className='w-[130px] h-[110px]'>
            <h4 className='text-[#6D7D7D] text-[40px]'>300+</h4>
            <p className='whitespace-normal mr-[440px] text-white text-[16px] tracking-[0.4em]'>Global clients</p>
          </div>
        </div>
    </div>
    
  )
}

export default Stats
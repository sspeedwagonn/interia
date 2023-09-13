import React from 'react'

const Stats = () => {
  return (
    <div className='mx-[195px]'>
        <div className=" pb-[100px] inline-flex space-x-5">
            <img className="h-[442px] md:h-[332px] md:w-[182px] w-[243px]" src="https://imgur.com/OZrZZDW.jpg" />
            <img className="h-[442px] w-[243px] md:h-[332px] md:w-[182px]" src="https://imgur.com/kvJtBZd.jpg" />
            <img className="rounded-tr-[50px] h-[243px] w-[243px] md:h-[182px] md:w-[182px]" src="https://imgur.com/8vKbCgk.jpg" />    
        </div>
        <button className='border-[1px] rounded-[100px] px-[14px]  py-[4px]  text-white text-[12px]'><span className='tracking-[0.43em]'>Learn Abou</span>t</button>
        <div>
          <h4>2k+</h4>
          <h4>20+</h4>
          <h4>300+</h4>
        </div>
    </div>
    
  )
}

export default Stats
import React from 'react'
import { hand_icon, arrow_icon, cartshop_image } from '../../assets'

const Cartshop = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center justify-between p-2.5 px-9 bg-gradient-to-b from-[#ff6347] to-[#e1ffea22]'>
      <div className='w-[350px] md:w-[450px] md:hidden relative'>
        <img src={cartshop_image} alt="" className='inset-0 bg-gradient-to-r from-[#ff4141] to-[#e1ffea22]'  />
      </div>
      <div className='leading-snug ml-0 md:ml-24  '>
        <h2 className='text-black text-xs md:text-sm lg:text-base font-bold'>EXCLUSIVE NEW ARRIVALS</h2>
        <div>
          <div className='flex items-center gap-5.5'>
            <p className='text-black text-4xl md:text-5xl lg:text-7xl font-semibold '>Fresh</p>
            <img src={hand_icon} alt="" className='w-28' />
          </div>
          <p className='text-black text-4xl md:text-5xl lg:text-7xl font-semibold mb-4'>collections</p>
          <p className='text-black text-4xl md:text-5xl lg:text-7xl font-semibold mb-5'>for all</p>
        </div>
        <div className='flex justify-center items-center gap-4 w-64 h-14 rounded-full bg-[#ff4141] text-white text-base font-medium cursor-pointer mb-8'>
          <div className='mr-2'>Latest Collection</div>
          <img src={arrow_icon} alt="" className='w-5' />
        </div>
      </div>
      <div className='w-[450px] hidden md:block relative'>
        <img src={cartshop_image} alt="" className=' inset-0 bg-gradient-to-r from-[#e1ffea22] to-[#ff4141]' />
      </div>
    </div>
  )
}

export default Cartshop
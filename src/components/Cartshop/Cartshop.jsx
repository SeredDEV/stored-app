import React from 'react'
import { arrow_icon, cartshop_image } from '../../assets'
import { motion } from "framer-motion"

const Cartshop = () => {

  const text = "Latest Collection";
  const letters = text.split("");

  return (
    <div className='min-h-screen sm:min-h-screen md:min-h-80 lg:min-h-80 xl:min-h-80 2xl:min-h-80 flex flex-col md:flex-row items-center justify-between p-2.5 px-9 bg-gradient-to-b from-[#ff6347] to-[#e1ffea22]'>
      <div className='w-[350px] md:w-[450px] md:hidden relative'>
        <img src={cartshop_image} alt="" className='inset-0 bg-gradient-to-r from-[#ff4141] to-[#e1ffea22]' />
      </div>
      <div className='leading-snug ml-0 md:ml-24  '>
        <h2 className='text-black text-xs md:text-sm lg:text-base font-bold'>EXCLUSIVE NEW ARRIVALS</h2>
        <div>
          <div className='flex items-center gap-5.5'>
            <p className='text-black text-4xl md:text-5xl lg:text-7xl font-semibold '>Fresh</p>
            <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px" className="w-28"
              animate={{ fill: ["#ffffff", "#ff4141", "#FF7F50", "#000000", "#ffffff", "#ff4141"] }}
              transition={{ duration: 2, yoyo: Infinity, ease: "linear" }}
            >
              <path d="M58.7,53.17a10.21,10.21,0,0,0-17.4,0l-3.78,6.14a6.1,6.1,0,0,0-.88,3.14h0a6,6,0,0,0,9,5.16h0a8.66,8.66,0,0,1,8.72,0h0a6,6,0,0,0,9-5.16h0a6.1,6.1,0,0,0-.88-3.14Z" />
              <ellipse cx="42.68" cy="38.55" rx="5.69" ry="7.01" transform="translate(-4.41 5.53) rotate(-7.04)" />
              <path d="M37.6,47.43c-.6-3.39-3.31-5.75-6.07-5.27s-4.51,3.63-3.91,7,3.31,5.75,6.06,5.27S38.19,50.82,37.6,47.43Z" />
              <path d="M56.46,45.51c3.12.38,6-2.42,6.51-6.26S61.3,32,58.18,31.6s-6,2.41-6.51,6.25S53.34,45.12,56.46,45.51Z" />
              <path d="M68.47,42.16C65.71,41.68,63,44,62.4,47.43s1.16,6.53,3.92,7,5.47-1.88,6.06-5.27S71.23,42.64,68.47,42.16Z" />
            </motion.svg>
          </div>
          <p className='text-black text-4xl md:text-5xl lg:text-7xl font-semibold mb-4'>collections</p>
          <p className='text-black text-4xl md:text-5xl lg:text-7xl font-semibold mb-5'>for all</p>
        </div>
        <div className='flex justify-center items-center gap-4 w-64 h-14 rounded-full bg-[#ff4141] text-white text-base font-medium cursor-pointer mb-8'>
          <div className='mr-2'>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
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
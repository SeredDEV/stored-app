import React from 'react'
import { exclusive_image } from '../../assets/index'

const Offers = () => {
    return (
        <div className='w-full h-auto flex flex-col lg:flex-row m-auto mt-12 mb-12 p-0 px-4 md:px-24 bg-gradient-to-b from-[#F47D68] to-[#ffffff]'>
            <div className='flex flex-col justify-center flex-grow ml-0 md:ml-36 mt-20 xl:mt-0'>
                <h1 className='text-black text-4xl md:text-6xl font-semibold mb-4'>Exclusive</h1>
                <h1 className='text-black text-4xl md:text-6xl font-semibold mb-3'>Promotions for Your Pets</h1>
                <p className='text-black text-lg md:text-xl font-semibold'>ONLY ON BEST-SELLING PET PRODUCTS</p>
                <button className='w-56 h-16 rounded-full bg-red-500 border-none text-white text-xl font-medium mt-8 cursor-pointer'>Check Now</button>
            </div>
            <div className='flex justify-center items-end flex-grow pt-0'>
                <img className='w-full md:w-[700px] pt-5' src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers

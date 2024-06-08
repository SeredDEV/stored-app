import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-full sm:w-9/10 h-full flex flex-col items-center justify-center m-auto p-4 sm:p-12 mb-24 gap-5" style={{ background: 'linear-gradient(180deg, #ff6347 0%, #e1ffea22 60%)', boxSizing: 'border-box' }}>
      <h1 className="lg:text-5xl font-semibold">Get Exclusive Offers On Your Email</h1>
      <p className="text-gray-700 text-sm sm:text-base">Subscribe to our newletter and stay updated</p>
      <div className="flex items-center justify-between bg-white w-full sm:w-11/12 max-w-md h-10 sm:h-15 rounded-full border border-gray-300">
        <input type="email" placeholder='Your Email' className="flex-grow pl-4 sm:pl-7 border-none outline-none text-gray-600 text-xs sm:text-sm" style={{ fontFamily: 'Poppins' }} />
        <button className="w-32 sm:w-44 h-10 sm:h-15 rounded-full bg-black text-white text-xs sm:text-sm cursor-pointer" style={{ lineHeight: '2rem', sm: { lineHeight: '3rem' } }}>Subscribe</button>
      </div>
    </div>

  )
}

export default NewsLetter

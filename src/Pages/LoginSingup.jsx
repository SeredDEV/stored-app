import React from 'react';
import { motion } from 'framer-motion';
import useAnimationOnScroll from '../components/hooks/useAnimationOnScroll';

const LoginSignup = () => {

  const [controls, ref] = useAnimationOnScroll();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      transition={{ duration: 0.3 }}
      className="w-full py-28 bg-gradient-to-b from-[#F23131] to-[#e1ffea22] pt-32"
    >
      <div className="w-full max-w-xs  sm:max-w-sm  md:max-w-md  lg:max-w-lg bg-white mx-auto p-8 box-border">
        <h1 className="font-bold m-2">Sign Up</h1>
        <div className="flex flex-col gap-6 mt-5  m-2">
          <input type="text" placeholder='Your Name' className="h-14 w-full pl-5 border-2 border-gray-200 outline-none text-gray-700 text-lg box-border" />
          <input type="email" placeholder='Email Address' className="h-14 w-full pl-5 border-2 border-gray-200 outline-none text-gray-700 text-lg box-border" />
          <input type="password" placeholder='Password' className="h-14 w-full pl-5 border-2 border-gray-200 outline-none text-gray-700 text-lg box-border" />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded  m-2">Continue</button>
        <p className=" text-gray-700 text-base font-medium m-2">Already have an account? <span className="text-red-600 font-semibold">Login here</span></p>
        <div className="flex items-center mt-4 space-x-2.5 text-gray-700 text-sm font-medium m-2">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default LoginSignup;
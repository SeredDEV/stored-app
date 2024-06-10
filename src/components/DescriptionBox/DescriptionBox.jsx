import React from 'react'
import { motion } from 'framer-motion';
import useAnimationOnScroll from '../hooks/useAnimationOnScroll';

const DescriptionBox = (props) => {
    const { description } = props;

    const [controls, ref] = useAnimationOnScroll()

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
            className='mt-16 w-4/5 mx-auto '
        >
            <div className="flex">
                <div className="flex items-center justify-center text-base font-semibold w-40 h-16 border border-gray-300">
                    Description
                </div>
                <div className="flex items-center justify-center text-base w-40  bg-gray-100 text-gray-700 h-16">
                    Reviews (122)
                </div>
            </div>
            <div className="flex flex-col space-y-6 border border-gray-300 p-12 pb-18">
                <p>{description}</p>
            </div>
        </motion.div>
    )
}

export default DescriptionBox
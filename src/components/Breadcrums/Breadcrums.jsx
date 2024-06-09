import React from 'react'
import { arrow_b_icon } from '../../assets';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className='flex flex-wrap items-center  text-gray-500 text-base font-medium m-10 mx-auto'>
      HOME <img src={arrow_b_icon} alt="" /> SHOP <img src={arrow_b_icon} alt="" /> {product.category} <img src={arrow_b_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum

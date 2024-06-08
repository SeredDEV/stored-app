import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="flex flex-col  items-start sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4  m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <Link to={`/product/${props.id}`} className="w-full px-0">
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} className="w-full h-100 object-center" />
      </Link>
      <h2 className="font-normal mb-2 w-full px-0">{props.name}</h2>
      <div className="flex justify-start items-start space-x-4">
        <p className="text-red-500 font-semibold">${props.new_price}</p>
        <p className="text-gray-500 line-through">${props.old_price}</p>
      </div>
    </div>
  )
}

export default Item

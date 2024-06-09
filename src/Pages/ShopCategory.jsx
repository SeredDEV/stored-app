import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { dropdown_icon } from '../assets/index';
import Item from '../components/Item/Item'

const ShopCategory = (props) => {

  const { all_products } = useContext(ShopContext)

  return (
    <div >
      <img className='block mx-auto w-full' src={props.banner} alt="" />
      <div className="flex mx-3 md:mx-40  mt-4 md:mt-0 justify-between items-center text-sm md:text-sm">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <button className="flex items-center p-1 md:p-1 md:px-4 rounded-full border border-gray-400">
          Sort by <img className="ml-2" src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center mx-auto w-full">
        {
          all_products.map((item, i) => {
            if (item.category === props.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  description={item.description} />
              )
            } else {
              return null
            }
          })
        }
      </div>
      <button className="flex justify-center items-center mx-auto my-2 w-48 h-16 rounded-full bg-gray-200 text-gray-500 text-sm font-medium">
        Explore More
      </button>
    </div>
  )
}

export default ShopCategory
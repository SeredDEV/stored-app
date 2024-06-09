import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
    return (
        <div className='flex flex-col items-center space-y-4 py-4 pb-32'>
            <h1 className="text-gray-900 text-4xl font-semibold">Related Products</h1>
            <hr className="mb-4" style={{ width: '150px', height: '4px', borderRadius: '10px', background: '#252525' }} />
            <div className='flex flex-wrap items-start justify-center'>
                {data_product.map((item, i) => {
                    return <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        description={item.description}
                    />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts

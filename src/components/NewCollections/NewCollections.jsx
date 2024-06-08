import React from 'react'
import new_collection from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
    return (
        <div className='flex flex-col items-center mt-28 justify-center w-full'>
            <h1 className="text-2xl font-bold mb-4 text-center" style={{ fontSize: '40px' }}>NEW COLLECTIONS</h1>
            <hr className="mb-4" style={{ width: '150px', height: '4px', borderRadius: '10px', background: '#252525' }} />
            <div className='flex flex-wrap items-start justify-center'>
                {
                    new_collection.map((item, i) => {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewCollections
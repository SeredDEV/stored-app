import React, { useContext } from 'react'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext';

const NewCollections = () => {

    const { all_products } = useContext(ShopContext);

    // Filtra y obtiene 4 productos de la categoría "cat"
    const catProducts = all_products
        .filter(item => item.category === 'cat')
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    // Filtra y obtiene 4 productos de la categoría "dog"
    const dogProducts = all_products
        .filter(item => item.category === 'dog')
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    // Combina los productos de ambas categorías
    const relatedProducts = [...catProducts, ...dogProducts];

    return (
        <div className='flex flex-col items-center mt-28 justify-center w-full'>
            <h1 className="text-2xl font-bold mb-4 text-center" style={{ fontSize: '40px' }}>NEW COLLECTIONS</h1>
            <hr className="mb-4" style={{ width: '150px', height: '4px', borderRadius: '10px', background: '#252525' }} />
            <div className='flex flex-wrap items-start justify-center'>
                {
                    relatedProducts.map((item, i) => {
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
                    })
                }
            </div>
        </div>
    )
}

export default NewCollections
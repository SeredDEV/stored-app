import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const Popular = ({ ids, category }) => {
  const { all_products } = useContext(ShopContext);

  // Filtrar productos por los IDs especificados
  const popularProducts = all_products.filter(item => ids.includes(item.id));

  const categoryText = category ? category.toUpperCase() : '';

  return (
    <div className='flex flex-col items-center justify-center w-full mt-24'>
      <h1 className="text-2xl font-bold mb-4 text-center" style={{ fontSize: '40px' }}>
        POPULAR {categoryText}
      </h1>
      <hr className="mb-4" style={{ width: '150px', height: '4px', borderRadius: '10px', background: '#252525' }} />
      <div className='flex flex-wrap items-start justify-center'>
        {popularProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;

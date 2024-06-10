import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { dropdown_icon } from '../assets/index';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [currentIndex, setCurrentIndex] = useState(12);

  const handleExploreMore = () => {
    setCurrentIndex(currentIndex + 12);
  };

  const hasMoreProducts = all_products.length > currentIndex;

  return (
    <div>
      <img className="block mx-auto w-full" src={props.banner} alt="" />
      <div className="flex sm:mx-20 md:mx-20 lg:mx-18 xl:mx-18 2xl:mx-20 mt-4 md:mt-0 justify-between items-center text-xs sm:text-xs md:text-base">
        <p>
          <span>Showing 1-{currentIndex}</span> out of {all_products.length} products
        </p>
        <button className="flex items-center p-1 md:p-1 md:px-4 rounded-full border border-gray-400">
          Sort by <img className="ml-2" src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center mx-auto w-full">
        {all_products
          .slice(0, currentIndex)
          .map((item, i) => {
            if (item.category === props.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  description={item.description}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      {hasMoreProducts && (
        <button
          onClick={handleExploreMore}
          className="flex justify-center items-center mx-auto my-1 w-48 h-16 rounded-xl bg-red-600 text-white text-lg font-medium"
        >
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;
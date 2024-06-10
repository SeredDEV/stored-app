import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { dropdown_icon } from '../assets/index';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [currentIndex, setCurrentIndex] = useState(12);
  const [selectedProductName, setSelectedProductName] = useState('');

  const handleExploreMore = () => {
    setCurrentIndex(currentIndex + 12);
  };

  const uniqueCategoryNames = [
    ...new Set(
      all_products
        .filter((item) => item.category === props.category)
        .map((product) => product.name)
    ),
  ];

  const hasMoreProducts =
    all_products.filter((item) => item.category === props.category).length >
    currentIndex;

  const handleSelectProduct = (event) => {
    setSelectedProductName(event.target.value);
  };

  const filteredProducts = selectedProductName
    ? all_products.filter(
      (item) =>
        item.name === selectedProductName && item.category === props.category
    )
    : all_products
      .filter((item) => item.category === props.category)
      .slice(0, currentIndex);

  return (
    <div>
      <img className="block mx-auto w-full" src={props.banner} alt="" />
      <div className="flex sm:mx-20 md:mx-20 lg:mx-18 xl:mx-18 2xl:mx-20 mt-4 md:mt-0 justify-between items-center text-xs sm:text-xs md:text-base">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of{' '}
          {all_products.filter((item) => item.category === props.category).length}{' '}
          products
        </p>
        <button className="flex items-center p-1 md:p-1 md:px-4 rounded-full border border-gray-400 relative">
          Sort by
          <select
            value={selectedProductName}
            onChange={handleSelectProduct}
            className="absolute right-0 top-0 w-32 h-8 bg-white border border-gray-400 rounded-md text-sm md:text-base flex items-center justify-center focus:outline-none hover:bg-gray-200"
          >
            <option value="">All</option>
            {uniqueCategoryNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
          <img className="ml-2 pointer-events-none" src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center mx-auto w-full">
        {filteredProducts.map((item, i) => (
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
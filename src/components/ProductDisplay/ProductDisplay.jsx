import React, { useContext } from 'react'
import { star_icon, star_dull_icon } from '../../assets';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='flex py-5 w-full space-x-4  justify-center items-center '>
            <div className="flex space-x-4">
                <div className="flex flex-col space-y-4">
                    <img className="w-24 h-32 object-cover" src={product.image} alt="" />
                    <img className="w-24 h-32 object-cover" src={product.image} alt="" />
                    <img className="w-24 h-32 object-cover" src={product.image} alt="" />
                    <img className="w-24 h-32 object-cover" src={product.image} alt="" />
                </div>
                <div className="h-auto w-auto">
                    <img className="h-full w-auto object-cover" src={product.image} alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold text-4xl">{product.name}</h1>
                <div className="flex items-center mt-2 space-x-1 text-gray-800 text-xl">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="flex my-6 space-x-5 text-3xl font-bold">
                    <div className="text-gray-500 line-through">${product.old_price}</div>
                    <div className="text-red-600">${product.new_price}</div>
                </div>
                <div className=" text-lg font-medium">
                    {product.description}
                </div>
                <div className="mt-8">
                    <h1 className="text-gray-600 text-lg font-semibold">Select Size</h1>
                    <div className="grid grid-cols-3 gap-3 my-4">
                        <div className="px-4 py-3 bg-gray-100 border border-gray-200 rounded cursor-pointer hover:bg-gray-200 hover:text-red-500">Tiny</div>
                        <div className="px-4 py-3 bg-gray-100 border border-gray-200 rounded cursor-pointer hover:bg-gray-200 hover:text-red-500">Small</div>
                        <div className="px-4 py-3 bg-gray-100 border border-gray-200 rounded cursor-pointer hover:bg-gray-200 hover:text-red-500">Medium</div>
                        <div className="px-4 py-3 bg-gray-100 border border-gray-200 rounded cursor-pointer hover:bg-gray-200 hover:text-red-500">Large</div>
                        <div className="px-4 py-3 bg-gray-100 border border-gray-200 rounded cursor-pointer hover:bg-gray-200 hover:text-red-500">Huge</div>
                        <div className="px-4 py-3 bg-gray-100 border border-gray-200 rounded cursor-pointer hover:bg-gray-200 hover:text-red-500">Gigantic</div>
                    </div>
                </div>
                <button
                    onClick={() => { addToCart(product.id) }}
                    className="px-10 py-3 w-48 text-sm font-semibold text-white bg-red-600 mb-6 border-none outline-none cursor-pointer rounded-lg">
                    ADD TO CART
                </button>
                <p className='mt-2'><span className='font-semibold'>Category:  </span>{product.category}</p>
                <p className='mt-2'><span className='font-semibold'>Breed :</span> {product.name} </p>
            </div>
        </div>
    )
}

export default ProductDisplay

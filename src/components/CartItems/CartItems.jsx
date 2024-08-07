import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { remove_icon } from '../../assets';

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='m-24 mx-auto max-w-7xl'>
            <div className="grid grid-cols-6 items-center gap-1 sm:gap-3 md:gap-5 text-xs sm:text-sm md:text-base text-gray-700 font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-0.5 bg-gray-700 border-0" />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="text-xs sm:text-xs md:text-base grid grid-cols-6 items-center gap-1 sm:gap-3 md:gap-5 py-1 text-gray-700 font-semibold">
                            <img src={e.image} alt="" className='w-6 h-6 sm:w-12 sm:h-12  md:w-16 md:h-16' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='w-6 h-7 sm:w-16 sm:h-12 border-2 border-gray-400 bg-white'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='w-3 sm:w-4 md:w-6 mx-7 cursor-pointer' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="flex my-24">
                <div className="flex-1 flex flex-col mr-48 ">
                    <h1 className="font-bold">Pay Totals</h1>
                    <div>
                        <div className="flex justify-between py-2">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-2">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-2">
                            <h3 className="font-bold" >Total</h3>
                            <h3 className="font-bold">${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="w-56 h-12 outline-none border-none bg-red-500 text-white text-sm font-semibold cursor-pointer rounded">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className="flex-1 text-base font-medium">
                </div>
            </div>
        </div>
    )
}

export default CartItems

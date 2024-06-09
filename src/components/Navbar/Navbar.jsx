import React, { useState } from "react";
import { logo } from '../../assets';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        setIsOpen(false);
        navigate(`/${menuItem}`);
    };

    return (
        <div className="navbar navbar-expand-lg bg-light w-100 flex justify-between items-center py-2 px-2 sm:px-6 md:px-5 lg:px-10 xl:px-20">
            <Link to="/" className="navbar-brand flex items-center" onClick={() => setMenu('shop')}>
                <img src={logo} alt="Logo" className="w-24 h-18 sm:w-20 sm:h-15 md:w-22 md:h-16 lg:w-24 lg:h-18 inline-block align-middle" />
                <span className="logo-text ml-2 sm:text-4xl md:text-3xl lg:text-5xl xl:text-5xl">
                    <span className="text-blue-900">P</span>
                    <span className="text-red-500">e</span>
                    <span className="text-blue-400">t</span>
                    <span> </span>
                    <span className="text-blue-900">s</span>
                    <span className="text-gray-800">h</span>
                    <span className="text-red-500">o</span>
                    <span className="text-blue-400">p</span>
                </span>
            </Link>
            <ul className="hidden md:flex justify-center space-x-10 md:space-x-3 lg:space-x-4 xl:space-x-10">
                <li className={`list-none ${menu === 'shop' ? 'text-gray-800' : ''}`} onClick={() => setMenu('shop')}>
                    <div className="flex items-center text-gray-800 hover:text-blue-900 text-3xl md:text-xl lg:text-3xl">
                        <StoreIcon className={`mr-1 stroke-current ${location.pathname === '/' ? 'text-blue-400' : ''}`} />
                        <Link className={`no-underline ${location.pathname === '/' ? 'text-red-500' : 'text-current'}`} to="/">Shop</Link>
                    </div>
                </li>
                <li className={`list-none ${menu === 'cat' ? 'active' : ''}`} onClick={() => setMenu('cat')}>
                    <div className=" flex items-center text-gray-800 hover:text-blue-700 text-3xl md:text-xl lg:text-3xl">
                        <CatIcon className={`mr-1 stroke-current ${location.pathname === '/cat' ? 'text-blue-900' : ''}`} />
                        <Link className={`no-underline ${location.pathname === '/cat' ? 'text-red-500' : 'text-current'}`} to="/cat">Cat</Link>
                    </div>
                </li>
                <li className={`list-none ${menu === 'dog' ? 'active' : ''}`} onClick={() => setMenu('dog')}>
                    <div className="flex items-center text-gray-800 hover:text-blue-700 text-3xl md:text-xl lg:text-3xl">
                        <DogIcon style={{ marginRight: "5px", stroke: location.pathname === '/dog' ? '#627ee4' : '' }} />
                        <Link className={`no-underline ${location.pathname === '/dog' ? 'text-red-500' : 'text-current'}`} to="/dog">Dog</Link>
                    </div>
                </li>
            </ul>
            <div className="flex justify-end items-center space-x-8 md:space-x-3 lg:space-x-3 xl:space-x-8">
                <Link className="hidden md:flex items-center no-underline text-2xl md:text-lg lg:text-xl xl:text-2xl bg-blue-400 text-white py-2 px-3 md:px-2  lg:px-3  rounded" to="/login">
                    <LogInIcon className=" md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-auto xl:h-auto" />
                    Login
                </Link>

                <div className="flex">
                    <div className="relative mr-10">
                        <Link className="no-underline " to="/cart">
                            <ShoppingCartIcon className="transform scale-125 lg:scale-100 xl:scale-125" />
                        </Link>
                        <div className="absolute top-[-20px] right-[-10px] bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                            0
                        </div>
                    </div>
                    <div className="relative md:hidden" style={{ zIndex: 9999 }}>
                        <button onClick={() => { setIsOpen(!isOpen); }}>
                            <MenuIcon className="h-6 w-6" />
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
                                <ul className="flex flex-col space-y-8 text-center w-full">
                                    <li className={`list-none ${menu === 'shop' ? 'text-gray-800' : ''}`} onClick={() => handleMenuClick()}>
                                        <Link className="flex items-center justify-center text-gray-800 hover:text-blue-900" to="/">
                                            <img src={logo} alt="Logo" className="w-60  inline-block align-middle" />
                                        </Link>
                                    </li>
                                    <li className={`list-none ${menu === 'shop' ? 'text-gray-800' : ''}`} onClick={() => handleMenuClick('shop')}>
                                        <Link className="flex items-center justify-center text-gray-800 hover:text-blue-900" to="/">
                                            <StoreIcon className={`mr-1 stroke-current transition-transform duration-500 ease-in-out hover:rotate-360 ${location.pathname === '/' ? 'text-blue-400' : ''}`} />
                                            Shop
                                        </Link>
                                    </li>
                                    <li className={`list-none ${menu === 'cat' ? 'active' : ''}`} onClick={() => handleMenuClick('cat')}>
                                        <Link className="flex items-center justify-center text-gray-800 hover:text-blue-700" to="/cat">
                                            <CatIcon className={`mr-1 stroke-current ${location.pathname === '/cat' ? 'text-blue-900' : ''}`} />
                                            Cat
                                        </Link>
                                    </li>
                                    <li className={`list-none ${menu === 'dog' ? 'active' : ''}`} onClick={() => handleMenuClick('dog')}>
                                        <Link className="flex items-center justify-center text-gray-800 hover:text-blue-700" to="/dog">
                                            <DogIcon style={{ marginRight: "5px", stroke: location.pathname === '/dog' ? '#627ee4' : '' }} />
                                            Dog
                                        </Link>
                                    </li>
                                    <li className="flex justify-center" onClick={() => handleMenuClick('login')}>
                                        <Link className="flex items-center justify-center no-underline text-xl bg-blue-400 text-white py-1 px-2 rounded w-auto" to="/login">
                                            <LogInIcon className="mr-1" />
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


function CatIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
            <path d="M8 14v.5" />
            <path d="M16 14v.5" />
            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
        </svg>
    )
}



function DogIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
            <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
            <path d="M8 14v.5" />
            <path d="M16 14v.5" />
            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
            <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
        </svg>
    )
}

function StoreIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
            <path d="M2 7h20" />
            <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
        </svg>
    )
}

function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


// function UserIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   )
// }


function LogInIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            className="w-6 h-6 text-gray-600 hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}
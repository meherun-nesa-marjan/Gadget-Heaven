import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { allCart, allFavourite } from "../../Utils";
const Navbar = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);


    const location = useLocation();
    useEffect(() => {
        const fav = allFavourite();
        setFavoriteProducts(fav);
    }, []);
    useEffect(() => {
        const cart = allCart();
        setCartProducts(cart);
    }, []);
    const navItems = [
        { path: '/', element: 'Home' },
        { path: '/Statistics', element: 'Statistics' },
        { path: '/Dashboard', element: 'Dashboard' },
        { path: '/Reviwe', element: 'Reviwe' },
        
    ];
    const navbarStyles = {
        '/': 'bg-[#9538E2]',
        '/Home': 'bg-[#9538E2] text-white',
        '/Statistics': 'bg-white w-full',
        '/Dashboard': 'bg-white w-full',
        '/Dashboard/Dasboardcart': 'bg-white w-full',
        '/Dashboard/Wishlist': 'bg-white w-full',
        '/Reviwe': 'bg-white w-full',
    };
    const getNavbarStyle = () => navbarStyles[location.pathname] || 'bg-white';

    return (
        <div className={`px-3 py-2 w-11/12 mx-auto rounded-t-2xl ${getNavbarStyle()}`}>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems.map(({ path, element }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `font-semibold mx-4 text-xl ${location.pathname === '/' ? 'text-black' : isActive ? 'text-[#9538E2]' : 'text-black'}`}
                                >
                                    {element}
                                </NavLink>
                            ))}
                        </ul>
                    </div>

                    <NavLink to="/" className={({ isActive }) =>
                                    `font-semibold mx-4 text-xl ${location.pathname === '/' ? 'text-white' : isActive ? 'text-[#9538E2]' : 'text-black'}`
                                }>Gadget Heaven</NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(({ path, element }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `font-semibold mx-4 text-xl ${location.pathname === '/' ? 'text-white' : isActive ? 'text-[#9538E2]' : 'text-black'}`
                                }
                            >
                                {element}
                            </NavLink>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end gap-5 text-xl  ">



                    <Link className="bg-white relative rounded-full p-3">

                        <AiOutlineShoppingCart />
                        <span className="badge badge-sm indicator-item absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                        {cartProducts.length}
                        </span>
                    </Link>
                    <Link className="bg-white relative rounded-full p-3">

                        <GrFavorite />
                        <span className="badge badge-sm indicator-item absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                        {favoriteProducts.length}
                           
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

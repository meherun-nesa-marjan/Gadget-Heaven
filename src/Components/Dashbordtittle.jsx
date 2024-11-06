import React from 'react';
import Heading from "./Heading";
import { NavLink } from 'react-router-dom';

const Dashbordtittle = () => {

    return (
        <div className="hero py-5 bg-[#9538E2] ">
            <div className="hero-content text-center">
                <div className="">
                    <Heading tittle={'Dashboard'} subtittle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
                    <NavLink
                        to="Dasboardcart"
                        className={({ isActive }) =>
                            isActive ? "rounded-full font-semibold py-3 px-10 bg-white text-[#9538E2]" : "rounded-full font-semibold py-3 px-10 bg-[#9538E2] border-2 border-white text-white"}>
                        Cart
                    </NavLink>




                    <NavLink
                     to="Wishlist"
                     className={({ isActive }) =>
                        isActive ? "rounded-full font-semibold py-3 px-10 bg-white text-[#9538E2]" : "rounded-full font-semibold py-3 px-10 bg-[#9538E2] border-white border-2 text-white"}>
                       
                            Wishlist
                       
                    </NavLink>

                </div>
            </div>


        </div>
    );
};

export default Dashbordtittle;

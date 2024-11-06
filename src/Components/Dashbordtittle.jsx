import React from 'react';
import Heading from "./Heading";
import { NavLink } from 'react-router-dom';

const Dashbordtittle = () => {
  
    return (
        <div className="hero  bg-[#9538E2] ">
        <div className="hero-content text-center">
            <div className="">
                <Heading tittle={'Dashboard'} subtittle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
                <NavLink to="Dasboardcart" >
                        <button className="rounded-full font-semibold py-3 px-10 bg-white text-[#9538E2]">
                            Cart
                        </button>
                    </NavLink>
                    <NavLink to="Wishlist">
                        <button className="rounded-full font-semibold py-3 px-10 bg-white text-[#9538E2]">
                            Wishlist
                        </button>
                    </NavLink>    
           
            </div>
        </div>

       
    </div>
    );
};

export default Dashbordtittle;

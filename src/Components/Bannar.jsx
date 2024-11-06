import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from "./Heading";

const Bannar = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/Dashboard');
    };

    return (
        <div className="hero rounded-b-2xl bg-[#9538E2] pt-6 pb-80">
            <div className="hero-content text-center">
                <div className="">
                    <Heading tittle={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtittle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
                    <button 
                        onClick={handleShopNowClick}
                        className="rounded-full font-semibold px-7 py-2 bg-white text-[#9538E2]"
                    >
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;

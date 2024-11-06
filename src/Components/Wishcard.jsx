import React from 'react';
import { FiDelete } from "react-icons/fi";
const Wishcard = ({product,handleRemoveFav}) => {
    const { product_title, product_image, price, description,product_id} = product || {}
    return (
        <div className='border-2 bg-white my-5 mx-16 rounded-xl '>
            <div className="flex justify-between p-10 ">
               <div className="flex ">
               <img className='w-24 h-24' src={product_image} alt="" />
                <div className="mx-10">
                    <h1 className='text-2xl font-bold'>{product_title}</h1>
                    <p>{description}</p>
                    <p>Price: {price}k</p>
                </div>
               </div>
                <div onClick={() => handleRemoveFav(product_id)} className="my-auto text-2xl">
                <FiDelete />
            </div>
            </div>
           

        </div>
    );
};

export default Wishcard;

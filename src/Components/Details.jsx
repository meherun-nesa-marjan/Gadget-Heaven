import React from 'react';
import { addCart, addFavourite } from '../Utils';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
const Details = ({ product }) => {
    
    const { product_title, product_image, price, description,rating,Specification } = product || {}
    const handleFavourite = product =>{
        addFavourite(product)

    }
    const handleCart = product =>{
        addCart(product)
    }
    return (
        <div>
            <div className="hero p-5 bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl mb-1 font-bold">{product_title}</h1>
                        <p className="mb-1">
                            Price: {price} k
                        </p>
                        <p className='mb-1'>{description}</p>
                        <p>Specification:</p>
                        <p> <ul className="list-disc pl-5">
                            {Specification && Specification.map((spec, index) => (
                                <li key={index}>{spec}</li> 
                            ))}
                        </ul></p>
                        <p className='mt-1'><div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div> {rating}</p>
                        <button onClick={()=>handleCart(product)} className="text-xl rounded-full bg-white border-2 p-4"><AiOutlineShoppingCart /></button>

                        <button onClick={()=>handleFavourite(product)} className="text-xl rounded-full bg-white border-2 p-4"><GrFavorite /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

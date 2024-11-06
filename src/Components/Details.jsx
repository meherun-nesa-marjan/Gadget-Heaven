import React from 'react';
import { useState } from 'react';
import { addCart, addFavourite } from '../Utils';
import StarRating from './StarRating';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
const Details = ({ product }) => {

    const { product_title, product_image,availability, price, description, rating, Specification } = product || {}
    const [isCartDisabled, setIsCartDisabled] = useState(false);
    const [isFavoriteDisabled, setIsFavoriteDisabled] = useState(false);
    const handleFavourite = product => {
        addFavourite(product)
        setIsFavoriteDisabled(true);

    }
    const handleCart = product => {
        addCart(product)
        setIsCartDisabled(true);
    }
    return (
        <div>
            <div className="hero p-3 bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm mmin-h-64 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl mb-1 font-bold">{product_title}</h1>
                        <p className="mb-1">
                            Price: {price} k
                        </p>
                        <button
                            onClick={() => handleCart(product)}
                            className={`text-xl rounded-full border-2 px-4 py-1 mt-4 
                                ${isCartDisabled || !availability ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'text-[#309C08] border-[#309C08] bg-[#ebf6e7]'}`}
                            disabled={isCartDisabled || !availability}
                        >
                            {availability ? "In Stock" : "Stock Out"}
                        </button>
                        <p className='mb-1'>{description}</p>
                        <p>Specification:</p>
                        <p> <ul className="list-disc pl-5">
                            {Specification && Specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul></p>
                        <p className='mt-1'><div className="mt-2 flex items-center">
                            <StarRating rating={rating} />
                            <span className="ml-2">{rating}</span>
                        </div></p>
                        <button
                            onClick={() => handleCart(product)}
                            className={`text-xl rounded-full border-2 p-4 mt-4 
                                ${isCartDisabled ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-white'}`}
                            disabled={isCartDisabled}
                        >
                            <AiOutlineShoppingCart />
                        </button>

                        <button
                            onClick={() => handleFavourite(product)}
                            className={`text-xl rounded-full border-2 p-4 mt-4 ml-4 
                                ${isFavoriteDisabled ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-white'}`}
                            disabled={isFavoriteDisabled}
                        >
                            <GrFavorite />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

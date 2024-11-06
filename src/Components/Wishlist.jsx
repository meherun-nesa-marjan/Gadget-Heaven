import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { allFavourite, removeFavourite } from "../Utils";
import Wishcard from './Wishcard';

const Wishlist = () => {
    const [product, setProduts] = useState([])
    useEffect(() => {
        const fav = allFavourite()
        setProduts(fav)
    }, [])
    const handleRemoveFav = product_id =>{
        removeFavourite(product_id)
        const fav = allFavourite()
        setProduts(fav)
    }
    
    return (
        <div>
            <h1 className='font-bold text-xl mx-16 mt-10'>wishlist</h1>
            {product.length > 0 ? (
                    product.map(product => (
                        <Wishcard 
                        
                        handleRemoveFav={handleRemoveFav}
                        key={product.product_id} 
                        product={product} />
                    ))
                ) : (
                    <p className="text-3xl text-gray-500">No data available</p>
                )}
        </div>
    );
};

export default Wishlist;
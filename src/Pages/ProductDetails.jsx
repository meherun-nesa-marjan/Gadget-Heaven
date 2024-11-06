import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsBannar from '../Components/DetailsBannar';
import Details from '../Components/Details';
const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state;

    return (
        <div>
            <div className="relative">
            <DetailsBannar />
            </div>

          
            <div className="absolute top-[30%] left-[25%] ">
            <Details product = {product} />
            </div>
            <div className="h-52"></div> 
        </div>
    );
};

export default ProductDetails;
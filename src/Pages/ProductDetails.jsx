import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsBannar from '../Components/DetailsBannar';
import Details from '../Components/Details';
const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state;

    return (
        <div className='w-11/12 mx-auto'>
            <div className="relative">
            <DetailsBannar />
            </div>

          
            <div className="absolute top-[30%] left-[20%] ">
            <Details product = {product} />
            </div>
            <div className="h-64"></div> 
        </div>
    );
};

export default ProductDetails;
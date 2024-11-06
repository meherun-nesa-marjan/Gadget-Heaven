import React from 'react';
import {
    ComposedChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    Area,
    Bar,
    Scatter
} from 'recharts';

const Cart = ({ data }) => {
 
    const chartData = data.map(product => ({
        name: product.product_title,
        price: product.price,
        rating: product.rating
    }));

    return (
       <div className="">
        <h2 className='font-bold py-4'>Statistics</h2>
         <div className='bg-white py-10 px-5 border-2'>
            
            <ComposedChart width={830} height={250} data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="price" fill="#BF87EE" stroke="#BF87EE" />
                <Bar dataKey="price" barSize={20} fill="#9538E2" />
                <Scatter name="Ratings" data={chartData} fill="#82ca9d" shape={<circle r={4} />} />
            </ComposedChart>
        </div>
       </div>
    );
};

export default Cart;

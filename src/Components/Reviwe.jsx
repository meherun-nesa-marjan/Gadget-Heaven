import React from 'react';
import { useLoaderData} from "react-router-dom";
import Heading from './Heading';
const Reviwe = () => {
    const data = useLoaderData();
   
    return (
        <div className=''>
             <div className="hero   bg-[#9538E2]">
            <div className="hero-content text-center">
                <div className="">
                    <Heading tittle={'Reviwe'} subtittle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
                   
                </div>
            </div>

           
        </div>
           <div className="grid my-10 grid-cols-2">
           {
                data.map(data =>(
                    <div className="border-2 bg-white m-5 rounded-2xl p-5">

                    <h2 className='font-bold text-xl'>Reviewer: {data.reviewer}</h2>
                    <p>Product: {data.product_name}</p>
                    <p>Commet: {data.comment}</p>
                    <p>Rating: {data.rating}</p>
                    <p>Date: {data.date}</p>
                   </div>  
                ))
            }
            
           </div>


           
        </div>
    );
};

export default Reviwe;
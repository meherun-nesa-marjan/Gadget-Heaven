import { useLoaderData } from "react-router-dom";
import Cart from "../Components/Cart";
import Chart from "../Components/Chart";

const Statistics = () => {
    const data = useLoaderData(); 
    console.log(data); 

    return (
        <div>
            <Chart />
             <div className="bg-gray-200 flex justify-center p-10">
             <Cart data={data} />
             </div>
          
           
        </div>
    );
};

export default Statistics;

import { Outlet, useLoaderData } from "react-router-dom";
import Bannar from "../Components/Bannar";
import Category from "../Components/Category";
import BannarImg from "../Components/BannarImg";
const Home = () => {
    const category = useLoaderData()
  
    return (
        <div className="w-11/12 mx-auto">
            <div className="relative mb-64">
            <Bannar />
           
            </div>
            <div className="absolute top-[55%] left-[30%]">
            <BannarImg />
            </div>
            
            <h1 className="text-center my-20 mx-center text-3xl font-semibold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex justify-between my-10">
                
                <Category category={category} />
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
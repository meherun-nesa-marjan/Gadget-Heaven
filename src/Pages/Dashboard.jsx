
import Dashbordtittle from "../Components/Dashbordtittle";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    
    return (
        <div>
           <Dashbordtittle />
           <Outlet />
           
        </div>
    );
};

export default Dashboard;
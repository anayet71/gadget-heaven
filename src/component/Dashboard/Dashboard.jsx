import { NavLink, Outlet } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
   
    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#9538E2] text-center text-white">
                <h2 className="font-bold text-4xl py-5">Dashboard</h2>
                <p className="w-8/12  mx-auto pb-7">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                {/* name of each tab group should be unique */}
                <div className="tabs justify-center pb-7 gap-3 custom_active_2 ">
                    <NavLink to={'cart'} className="  px-12 py-2.5 rounded-3xl hover:bg-white border border-white text-white hover:text-violet-800 font-semibold text-xl" >Cart</NavLink>
                    <NavLink to={'wishlist'} className=" px-8 py-2.5 rounded-3xl hover:bg-white border border-white text-white hover:text-violet-800  font-semibold text-xl" >Wishlist</NavLink>          
                    
                </div>
            </div>
            <div>
                    <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
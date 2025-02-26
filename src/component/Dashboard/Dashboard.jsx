import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#9538E2] text-center text-white">
                <h2 className="font-bold text-4xl py-5">Dashboard</h2>
                <p className="w-8/12  mx-auto pb-7">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div>
                    <button className="">Cart</button>
                    <button> <NavLink to={'dashboard/:cart'}></NavLink> </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
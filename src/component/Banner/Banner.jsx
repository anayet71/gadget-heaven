import { NavLink } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg'; // Import the image


const Banner = () => {
    return (

        <div className="max-w-7xl mx-auto bg-[#9538E2] rounded-b-2xl ">
            <div className=" max-w-6xl mx-auto bg-[#9538E2] text-center text-white pb-32 rounded-b-2xl relative">

                <h1 className="text-6xl font-semibold pt-12 pb-6  ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p > Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className="text-[#9538E2] bg-white  font-bold mt-7 rounded-4xl px-7 py-4"><NavLink to={'dashboard'}>Shop Now</NavLink> </button>
                {/* Banner img */}
                <div className='absolute top-[365px] left-[58px] border-3 p-5 rounded-2xl bg-gray-100/30   ' >
                    <img className='w-[980px] h-[500px] object-cover rounded-2xl' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};



export default Banner;
import { Link } from "react-router-dom";
import navIcon from '../../assets/Vector.png'
import navIcon2 from '../../assets/Frame.png'

const NavBar = () => {
    return (

        <div className="max-w-7xl mx-auto bg-[#9538E2] rounded-t-2xl">
            <div className="navbar  max-w-6xl mx-auto text-white mt-5">

                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-violet-300 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link className="font-semibold text-[18px]" to={'/'}>Home</Link></li>
                            <li><a className='font-semibold text-[18px]'>Statistics</a></li>
                            <li><Link className="font-semibold text-[18px]" to={'dashboard'}>Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-2xl">Gadget Heaven
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className="font-semibold text-[18px]" to={'/'}>Home</Link></li>
                        <li><a className='font-semibold text-[18px]'>Statistics</a></li>
                        <li><Link className="font-semibold text-[18px]" to={'dashboard'}>Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3 ">
                    <img className="bg-white p-1 rounded-full cart-icon border border-gray-300" src={navIcon} alt="" />
                    <img className="bg-white p-1 rounded-full cart-icon border border-gray-300" src={navIcon2} alt="" />

                </div>
            </div>
        </div>
    );
};

export default NavBar;
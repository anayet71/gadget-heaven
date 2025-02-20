import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";

const Root = () => {
    return (

        <div>
            <div>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default Root;
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;
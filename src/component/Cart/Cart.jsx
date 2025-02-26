import { useLoaderData } from "react-router-dom";

const Cart = () => {

    const product = useLoaderData()
    console.log(product)

    return (
        <div className="bg-gray-100 max-w-7xl mx-auto  pt-5">
            <div className="max-w-6xl mx-auto">
                <h1></h1>
            </div>
        </div>
    );
};

export default Cart;
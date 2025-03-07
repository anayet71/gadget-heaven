import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utility/addToDb";
import { HiOutlineX } from "react-icons/hi";
import { GiSettingsKnobs } from "react-icons/gi";
import { Helmet } from "react-helmet";


const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isSorted, setIsSorted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCart = getStoredCart();
        const cartList = allProducts.filter(product => storedCart.includes(product.product_id));
        setCartList(cartList);
    }, [allProducts]);

    useEffect(() => {
        const total = cartList.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(total);
    }, [cartList]);

    const handleSortByPrice = () => {
        const sortedList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedList);
        setIsSorted(true);
    };

    const handlePurchaseClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-100 max-w-7xl mx-auto pb-24 pt-5">
            <Helmet>
                <title>Shopping Cart- Gadget Heaven</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between pb-5">
                    <p className="font-bold text-2xl">Cart</p>

                    <div className="flex items-center gap-4">
                        <p className="font-bold">Total cost: $ {totalPrice}</p>
                        <button
                            onClick={handleSortByPrice}
                            className="flex items-center gap-2 border-2 border-violet-600 px-6 py-2 rounded-4xl font-semibold text-[#9538E2]"
                        >
                            Sort by Price <GiSettingsKnobs className="text-violet-700" />
                        </button>
                        <button
                            onClick={handlePurchaseClick}
                            className="py-3 px-6 bg-gradient-to-b from-[#9538E2] to-[#df74fa] rounded-4xl font-semibold text-white"
                        >
                            Purchase
                        </button>
                    </div>
                </div>

                <div>
                    {cartList.length > 0 ? (
                        <div className="grid gap-5">
                            {cartList.map(product => (
                                <ul key={product.product_id}>
                                    <div className="flex justify-between bg-white p-5 rounded-2xl">
                                        <div className="flex gap-4">
                                            <div>
                                                <img
                                                    className="w-[170px] h-[110px] object-cover rounded-xl"
                                                    src={product.product_image}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="leading-loose">
                                                <h4 className="text-xl font-bold">{product.product_title}</h4>
                                                <div className="flex gap-1.5">
                                                    <p className="font-bold">Description:</p>
                                                    <p className="text-gray-500">{product.description}</p>
                                                </div>
                                                <p className="font-semibold"> Price: $ {product.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="p-1.5 border border-red-700 rounded-full">
                                                <HiOutlineX className="text-red-600" />
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            ))}
                        </div>
                    ) : (
                        <h4 className="text-3xl pb-18 text-center text-red-600 font-semibold">
                            No cart item
                        </h4>
                    )}
                </div>
            </div>

            {/* Purchase Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed  bg-gray-500/30 inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                        <h2 className="text-xl font-bold mb-3 text-center">Congratulations!</h2>
                        <p className="text-gray-700 text-center mb-4">For your purchase</p>
                        <div className="flex justify-center gap-4">
                           
                            <button onClick={closeModal} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg font-semibold"> <Link to={'/'}> Close</Link> </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

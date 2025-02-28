import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utility/addToDb";
import { HiOutlineX } from "react-icons/hi";
import { GiSettingsKnobs } from "react-icons/gi";



const Cart = () => {

    const [cartList, setCartList] = useState([])
    const allProducts = useLoaderData()

    useEffect(() => {
        const storedCart = getStoredCart()
        const storedCartMap = storedCart.map(id => id)
        const cartList = allProducts.filter(product => storedCartMap.includes(product.product_id))
        console.log(cartList)

        setCartList(cartList)

    }, [allProducts])
    console.log(cartList)


    return (
        <div className="bg-gray-100 max-w-7xl mx-auto pb-24  pt-5">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between pb-5">
                    <p className="font-bold text-2xl">Cart</p>
                
                <div className="flex items-center gap-4">
                    <p className="font-semibold">Total cost: 999.99</p>
                    <button className="flex items-center gap-2 border-2 border-violet-600 px-6 py-2 rounded-4xl font-semibold text-[#9538E2]">Sort by Price <GiSettingsKnobs className="text-violet-700" />
                    </button>
                    <button className="py-3 px-6 bg-gradient-to-b from-[#9538E2] to-[#df74fa] before:content-[''] before:absolute before:inset-0 before:bg-[url('/path-to-grainy-texture.png')] before:opacity-20 before:mix-blend-overlay rounded-4xl font-semibold text-white">Purchase</button>
                </div>
                </div>
                <div className="grid gap-3 ">
                    {cartList.length > 0 ? (
                        <div>  {
                            cartList.map(product => <ul key={product.product_id}>
                                <div className="flex justify-between  bg-white p-5 rounded-2xl">
                                    <div className=" flex gap-4 ">
                                        <div>
                                            <img className="w-[170px] h-[110px] object-cover rounded-xl" src={product.product_image} alt="" />
                                        </div>
                                        <div className="leading-loose ">
                                            <h4 className="text-xl font-bold">{product.product_title}</h4>
                                            <div className="flex gap-1.5">
                                                <p className="font-bold">Description:</p>
                                                <p className="text-gray-500">{product.description}</p>
                                            </div>
                                            <p className="font-semibold"> Price: $ {product.price}</p>


                                        </div>
                                    </div>
                                    <div>
                                        <HiOutlineX />
                                    </div>
                                </div>
                            </ul>)

                        } </div>

                    ) : (<h4 className="text-3xl pb-18 text-center text-red-600 font-semibold"> No cart item </h4>)}

                </div>

            </div>
        </div>
    );
};

export default Cart;
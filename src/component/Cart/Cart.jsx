import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Utility/addToDb";
import { HiOutlineX } from "react-icons/hi";


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
        <div className="bg-gray-100 max-w-7xl mx-auto  pt-5">
            <div className="max-w-6xl mx-auto">
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
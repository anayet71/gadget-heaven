import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../Utility/addToDb";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";


const Wishlist = () => {
    const [wishList, setWishList] = useState([])
    const allProducts = useLoaderData()
    useEffect(() => {
        const storedWishList = getStoredWishList()
        const storedWishListMap = storedWishList.map(id => id)

        const wishList = allProducts.filter(product => storedWishListMap.includes(product.product_id))
        console.log(wishList)

        setWishList(wishList)
    }, [allProducts])


    return (
        <div className="bg-gray-100 max-w-7xl mx-auto  pt-5">
            <div className="max-w-6xl mx-auto">
            {wishList.length > 0 ? (
            <div className="grid gap-5 pb-38 ">{
                wishList.map(product => <ul key={product.product_id}>
                    <div className="flex justify-between bg-white p-5 rounded-2xl">

                    <div className="flex  gap-4 ">
                        <div>
                            <img className="w-[180px] h-[140px] object-cover rounded-xl" src={product.product_image} alt="" />
                        </div>
                        <div className="leading-loose ">
                            <h4 className="text-xl font-bold">{product.product_title}</h4>
                            <div className="flex gap-1.5">
                                <p className="font-bold">Description:</p>
                                <p className="text-gray-500">{product.description}</p>
                            </div>
                            <p className="font-semibold"> Price: $ {product.price}</p>
                            <button className=" btn  px-5 py-1.5 rounded-full border bg-violet-600  text-white  "> Add to Cart<HiOutlineShoppingCart />
                            </button>

                        </div>
                    </div>
                        <div>
                            <HiOutlineX />
                        </div>
                    </div>
                </ul>)
            }
            </div>
          ) : (
            <h3 className="text-3xl pb-18 text-center">No wishlist selected</h3>
          )}
               
            </div>

        </div>
    );

};

export default Wishlist;
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi2";
import { addToWishlist } from "../../Utility/addToDb";



const ProductDetails = () => {

    const { product_id } = useParams()
    const data = useLoaderData()
    // console.log(typeof product_id, typeof data[0].product_id)

    const product = data.find(product => product.product_id == product_id)
    console.log(data, product, product_id)

    const { product_title, product_image, price, description, stock, rating } = product

    const handleWishlist = (id) =>{
        addToWishlist(id)

    }


    return (
        <div className="max-w-7xl mx-auto  relative ">
            <div className="bg-[#9538E2] h-[400px] mb-[350px] text-white  text-center  ">
                <h2 className="text-3xl font-semibold pt-6">Product Details</h2>
                <p className="text-xl w-8/12 mx-auto pt-3">Explore the latest gadgets that will take your experience to the next level. From smart devices  to the coolest accessories, we have it all!</p>
            </div>

            <div className=" bg-gray-500">

                <div className=" max-w-6xl mx-auto bg-white  p-5 rounded-xl flex gap-6 items-start absolute  top-[180px] left-[65px]">
                    <div>
                        <img className="w-[420px] h-[500px] object-cover  rounded-xl" src={product_image} alt="" />
                    </div>
                    <div>
                        <h4 className="font-bold text-3xl  ">{product_title}</h4>
                        <p className="my-4 font-semibold text-xl">Price: $ {price}</p>
                        <button className={` ${stock ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}  px-4 py-[5px] border rounded-[40px] font-semibold `}>{stock > 0 ? 'In Stock' : 'Stock Out'}</button>
                        <p className="text-gray-600 my-4  ">{description}</p>
                        <div>
                            <h5 className="font-bold text-xl py-2" >Specification:  </h5>
                            {product.specification.map((spec, index) => (

                                <ol key={index}>
                                    <li className="text-gray-600">1. {spec.processor}</li>
                                    <li className="text-gray-600">2. {spec.storage} RAM</li>
                                    <li className="text-gray-600">3. Battery {spec.battery}</li>
                                    <li className="text-gray-600">4. {spec.display}</li>
                                </ol>
                            ))}
                        </div>
                        <div>
                            <h5 className="font-bold text-xl py-2" >Rating: <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" /> </div> </h5>
                            <div className="flex items-center gap-3 mb-4">

                                <div className="rating rating-xs">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />

                                </div>
                                <p className="px-3 py-1 bg-gray-100 rounded-2xl font-semibold">{rating}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className=" btn  px-5 py-1.5 rounded-full border bg-violet-600  text-white "> Add to Cart<HiOutlineShoppingCart />
                            </button>
                            <button onClick={() =>handleWishlist(product_id)} className="btn flex items-center gap-2 bg-gray-50 px-2.5 py-2.5  border-gray-300font-bold  rounded-3xl">
                            <HiOutlineHeart /> 

                            </button>
                        </div>
 




                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { product_title, product_id, product_image, price } = product


    return (
        <div>
            <div className="bg-white p-5 rounded-xl">

            
                    <img className="w-[230px] h-[170px] object-center object-cover rounded-xl" src={product_image} alt="" />
              
                <div className="">
                    <h4 className="font-bold text-xl pt-3 inline-block ">{product_title}</h4>
                    <p className="my-2 ">Price: {price}$</p>

                    <Link to={`/products/${product_id}`}>
                        <button className="btn badge border-2 border-violet-600 rounded-xl p-4 text-violet-600 font-semibold">View Details:</button>
                    </Link>
                    
                </div>
            </div>
        </div> 
    );
};

export default Product;
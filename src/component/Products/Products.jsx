import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProduct] = useState([])


    useEffect(() => {
        fetch('/gadgetHeaven.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const uniqueCategories = [...new Set(products.map(product => product.category))];

    
    return (
        <div className="max-w-7xl mx-auto pt-[650px] bg-gray-100 pb-36">
            <div className="max-w-6xl mx-auto ">
                <h1 className="text-5xl font-bold pb-20 text-center">Explore Cutting-Edge Gadgets</h1>
                <div className="flex gap-5">
                    <div className="bg-white h-[610px] p-6 rounded-2xl border border-gray-200">
                        <p className="bg-gray-100 hover:bg-violet-500 transition duration-[.5s]  hover:text-white font-semibold py-3 pl-5 pr-8 rounded-4xl mb-6">All Category</p>
                       {
                        uniqueCategories.map(category => (
                            <p key={category} className="bg-gray-100 hover:bg-violet-500 transition duration-[.5s] hover:text-white font-semibold py-3 pl-5 pr-8 rounded-4xl mb-6">
                              {category}
                            </p>
                          ))
                          
                       }
                       
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {
                            products.map(product => <Product key={product.product_id} product={product}></Product>)
                        }
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;
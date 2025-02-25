import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { product_title, product_id, product_image, category, price, description } = useParams()


    return (
        <div>
            <div className="max-w-6xl mx-auto ">
                <div>
                    <img src={product_image} alt="" />
                </div>
                <div>
                    <h4>{product_title}</h4>
                    <h6>Price: $ {price}</h6>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
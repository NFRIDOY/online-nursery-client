import { Link } from "react-router-dom";

// import TProduct from "../../../utils/types/product.interface.ts"
const ProductCard = ({ product }) => {
    return (
        <div className="card card-compact bg-base-100  max-h-96 my-auto w-48 md:w-72 shadow-xl mx-auto">
            <Link to={`/products/${product?._id}`}>
                <figure>
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="object-cover h-40 w-full rounded-2xl"
                    />
                </figure>
            </Link>
            <div className="card-body">
                <Link to={`/products/${product?._id}`} className="card-title flex justify-between items-center">
                    {product?.title}
                    <div className="">
                        BDT.{" "}
                        <span className="text-primary">{product?.price}</span>
                    </div>
                </Link>
                <Link to={`/products/${product?._id}`}>{product?.description}</Link>
                <div className="flex justify-between">
                    <div className="card-actions justify-start">
                        <button className="bg-secondary size-12 font-bold rounded-full">
                            {product?.rating}
                        </button>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

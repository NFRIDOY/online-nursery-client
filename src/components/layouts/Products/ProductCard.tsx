// import TProduct from "../../../utils/types/product.interface.ts"
const ProductCard = ({ product }) => {
    return (
        <div className="card bg-base-100 w-72 shadow-xl">
            <figure>
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="object-cover h-40 w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between items-center">
                    {product?.title}
                    <div className="">
                        BDT.{" "}
                        <span className="text-primary">{product?.price}</span>
                    </div>
                </h2>
                <p>{product?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

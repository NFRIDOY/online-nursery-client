import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice/cartSlice";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const publicAxios = useAxios();
    const dispatch = useDispatch();

    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: productData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () =>
            await publicAxios.get(`/products/${id}`).then((res) => {
                return res.data;
            }),
    });
    const product = productData?.data;
    console.log(productData?.data);

    if (isPendingProducts) {
        <div className="">
            <span className="loading loading-dots loading-lg"></span>
        </div>;
    }
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
                <div className="md:w-1/2 md:max-h-screen">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="md:w-1/2  p-4">
                    <h1 className="text-2xl font-bold mb-2">{product?.title}</h1>
                    <div className="text-xl font-semibold text-primary mb-4">
                        BDT. {product?.price}
                    </div>
                    <p className="mb-4">{product?.description}</p>
                    <div className="mb-4">
                        <span className="font-semibold">Rating:</span>{" "}
                        {product?.rating}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold">In Stock:</span>{" "}
                        {product?.inventory?.quantity}
                    </div>
                    {/* <button className="btn btn-primary w-full">Buy Now</button> */}
                    <button className="btn btn-primary w-full" onClick={() => dispatch(addToCart({...product, quantity: 1}))}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

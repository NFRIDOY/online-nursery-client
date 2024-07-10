import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../utils/apis/prouductsApi";
import useAxios from "../../../hooks/useAxios";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    // const { data: products, error, isLoading } = useGetProductsQuery(undefined);

    const publicAxios = useAxios();

    // const {
    //     data: products,
    //     isPending,
    //     isError,
    // } = useQuery({ queryKey: ["products"], queryFn: getProducts });

    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: productData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () =>
            await publicAxios.get(`/products`).then((res) => {
                return res.data;
            }),
    });

    if (isPendingProducts || errorProducts) {
        // console.log(isPending)
        // console.log(isError)
        <div>Loading....</div>;
    }
    console.log(productData);
    return (
        <div className="grid grid-cols-4 gap-y-10 mx-auto w-full border-0">
            {productData?.data?.map((product) => (
                <>
                    <ProductCard product={product} />
                </>
            ))}
        </div>
    );
};

export default AllProducts;

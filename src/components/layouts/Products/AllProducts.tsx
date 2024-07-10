import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../utils/apis/prouductsApi";
import useAxios from "../../../hooks/useAxios";
import ProductCard from "./ProductCard";
import { TProduct } from "../../../utils/types/product.interface";
import Container from "../../ui/Container";
import Title from "../../ui/Title";

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
        <Container>
            <Title>All Plants</Title>
            <div className="grid grid-cols-4 md:gap-y-10  justify-center items-center w-full border-0 ">
                {productData?.data?.map((product: TProduct) => (
                    <>
                        <ProductCard product={product} />
                    </>
                ))}
            </div>
        </Container>
    );
};

export default AllProducts;

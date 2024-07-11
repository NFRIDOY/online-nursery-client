import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/layouts/Products/ProductCard";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import { TProduct } from "../utils/types/product.interface";
import useAxios from "../hooks/useAxios";
import useScrollToTop from "../utils-hooks-ts-React/hooks/useScrollToTop";

const Category = () => {
    // const { data: products, error, isLoading } = useGetProductsQuery(undefined);
    useScrollToTop();

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
            <Title>Categories</Title>
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

export default Category;

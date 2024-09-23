import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import ProductCard from "./ProductCard";
import { TProduct } from "../../../utils/types/product.interface";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import { Link } from "react-router-dom";
import useScrollToTop from "../../../utils-hooks-ts-React/hooks/useScrollToTop";

const Products = () => {
    // const { data: products, error, isLoading } = useGetProductsQuery(undefined);
    useScrollToTop();

    const publicAxios = useAxios();

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
    // console.log(productData);
    return (
        <Container>
            {
                productData && <Title>All Plants</Title>
            }
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-y-10  justify-center items-center w-full border-0 ">
                {productData?.data?.slice(0, 8)?.map((product: TProduct) => (
                    <>
                        <ProductCard product={product} />
                    </>
                ))}
            </div>
            {
                productData?.data?.length > 8 ? <div className="flex justify-center items-center my-8">
                <Link to={"/products"} className="btn btn-secondary">
                    {" "}
                    See More
                </Link>
            </div> : null
            }
            
        </Container>
    );
};

export default Products;

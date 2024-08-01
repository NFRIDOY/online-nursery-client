import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Container from "../components/ui/Container";
import { TProduct } from "../utils/types/product.interface";
import ProductCard from "../components/layouts/Products/ProductCard";
import Title from "../components/ui/Title";

const AllProducts = () => {
    // const { data: products, error, isLoading } = useGetProductsQuery(undefined);

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

    if (isPendingProducts) {
        // console.log(isPending)
        // console.log(isError)
        <div>
            <span className="loading loading-dots loading-xs"></span>
        </div>;
    }
    console.log(productData);
    return (
        <Container>
            <Title>All Plants</Title>

            <Title>
                <label className="input input-primary input-bordered flex items-center gap-2 mx-3 md:mx-10">
                    <input type="text" className="grow" placeholder="Search Plant Name" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </Title>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-y-10  justify-center items-center w-full border-0 ">
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

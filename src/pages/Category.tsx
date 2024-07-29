import { useQuery } from "@tanstack/react-query";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import useAxios from "../hooks/useAxios";
import useScrollToTop from "../utils-hooks-ts-React/hooks/useScrollToTop";
import { Link } from "react-router-dom";

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
        isPending: isPendingCategory,
        error: errorCategory,
        data: categoryData,
        refetch: refetchCategory,
    } = useQuery({
        queryKey: ["category"],
        queryFn: async () =>
            await publicAxios.get(`/category`).then((res) => {
                return res.data;
            }),
    });

    if (isPendingCategory || errorCategory) {
        // console.log(isPending)
        // console.log(isError)
        <div>Loading....</div>;
    }
    console.log(categoryData);
    return (
        <Container>
            <Title>Categories</Title>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-y-10  justify-center items-center w-full border-0 ">
                {categoryData?.data?.slice(0, 6)?.map((category) => (
                    <>
                        {/* <ProductCard product={product} /> */}
                        <Link
                            to={`${category?._id}`}
                            className="flex flex-col items-center gap-3 flex-wrap">
                            <div className="avatar">
                                <div className="mask mask-squircle size-72">
                                    <img
                                        src={category?.image}
                                        alt="Avatar Tailwind CSS Component"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">
                                    {category?.title}
                                </div>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </Container>
    );
};

export default Category;

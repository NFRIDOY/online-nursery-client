import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import { Link } from "react-router-dom";
import useScrollToTop from "../../../utils-hooks-ts-React/hooks/useScrollToTop";

export default function Category() {
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
            {categoryData && <Title>All Category</Title>}
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-y-10  justify-center items-center w-full border-0 ">
                {categoryData?.data?.slice(0, 6)?.map((category) => (
                    <>
                        {/* <ProductCard product={product} /> */}
                        <Link
                            to={`${category?._id}`}
                            className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
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
            {categoryData?.data?.length > 6 ? (
                <div className="flex justify-center items-center my-8">
                    <Link to={"/category"} className="btn btn-secondary">
                        {" "}
                        More Categories
                    </Link>
                </div>
            ) : null}
        </Container>
    );
}

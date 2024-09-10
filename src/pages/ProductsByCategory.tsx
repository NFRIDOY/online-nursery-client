import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Container from "../components/ui/Container";
import { TProduct } from "../utils/types/product.interface";
import ProductCard from "../components/layouts/Products/ProductCard";
import Title from "../components/ui/Title";
import { SearchResultsList } from "../components/ui/SearchResultsList/SearchResultsList";
import { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ProductsByCategory = () => {
    const { id } = useParams<{ id: string }>();

    const publicAxios = useAxios();

    // // Search for products
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: productData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () =>
            await publicAxios
                .get(`/products?searchTerm=${input}`)
                .then((res) => {
                    return res.data;
                }),
    });

    const fetchData = (value) => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        publicAxios.get(`/products`).then((res) => {
            const results = res?.data?.data.filter((products) => {
                return (
                    value &&
                    products &&
                    products.title &&
                    products.title.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    refetchProducts();

    const filteredProducts = productData?.data?.filter(
        (product) => product?.category?._id === id
    );
    const filteredProductsCategoryName = productData?.data?.find(
        (product) => product?.category?._id === id
    );

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
            {filteredProducts?.length > 0 && (
                <Title>
                    <div className="flex justify-center gap-x-5">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={filteredProductsCategoryName?.image}
                                    alt="Avatar Tailwind CSS Component"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                {filteredProductsCategoryName?.title}
                            </div>
                        </div>
                    </div>
                </Title>
            )}

            {/* <div className="z-10 absolute top-20 left-20 lg:left-60 lg:right-0 w-[70%]">
                {results && results.length > 0 && (
                    <SearchResultsList results={results} />
                )}
            </div> */}
            {filteredProducts?.length ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-y-10  justify-center items-center w-full border-0 ">
                    {filteredProducts?.map((product: TProduct) => (
                        <>
                            <ProductCard product={product} />
                        </>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center h-[80vh] gap-y-6">
                    <div className="text-4xl">No Plants Found</div>
                    <Link to={"/category"} className="btn btn-primary">Go Back</Link>
                </div>
            )}
        </Container>
    );
};

export default ProductsByCategory;

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

const AllProducts = () => {
    // const { data: products, error, isLoading } = useGetProductsQuery(undefined);

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
                {/* <input type="text" placeholder="Type to search..." /> */}
                <label className="input input-primary input-bordered flex items-center gap-2 mx-3 md:mx-10">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search Plant Name"
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <button
                        type="button"
                        className="search-button hidden lg:inline">
                        {input || results.length > 0 ? (
                            <RiDeleteBack2Fill
                                size={20}
                                className="text-primary"
                                onClick={() => handleChange("")}
                            />
                        ) : (
                            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-100 text-warning"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <FaSearch size={20} className="text-warning" />
                        )}
                    </button>
                    
                </label>
            </Title>
            {/* <div className="z-10 absolute top-20 left-20 lg:left-60 lg:right-0 w-[70%]">
                {results && results.length > 0 && (
                    <SearchResultsList results={results} />
                )}
            </div> */}
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-y-10  justify-center items-center w-full border-0 ">
                {productData?.data?.map((product: TProduct) => (
                    <div key={product?._id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default AllProducts;

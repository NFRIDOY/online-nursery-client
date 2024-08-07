import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Title from "../../ui/Title";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const ProductsTable = () => {
    const [productList, setProductList] = useState([]);
    const [input, setInput] = useState("");

    const publicAxios = useAxios();
    // useEffect(() => {
    //     publicAxios.get("/products").then((res) => {
    //         setProductList(res?.data?.data);
    //         // console.log(res?.data?.data);
    //     });
    // }, []);

    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: productData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["products", input],
        queryFn: async () =>
            await publicAxios
                .get(`/products?searchTerm=${input}`)
                .then((res) => {
                    return res.data;
                }),
    });

    const handleChange = (value) => {
        setInput(value);
        // fetchData(value);
        
    };

    return (
        <table className="table table-xs lg:table lg:table-lg">
            {/* head */}
            <thead>
                <tr>
                    <td colSpan={5}>
                        <Title>
                            {/* <input type="text" placeholder="Type to search..." /> */}
                            <label className="input input-primary input-bordered flex items-center gap-2 mx-3 md:mx-10">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Search Plant Name"
                                    value={input}
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    className="search-button hidden lg:inline">
                                    {input ? (
                                        <RiDeleteBack2Fill
                                            size={20}
                                            className="text-primary"
                                            onClick={() => handleChange("")}
                                        />
                                    ) : (
                                        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-100 text-warning"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                        <FaSearch
                                            size={20}
                                            className="text-warning"
                                        />
                                    )}
                                </button>
                            </label>
                        </Title>
                    </td>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Category & Stock</th>
                    <th>Rating</th>
                    <th className=" w-1">Description</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                {productData?.data?.map((product) => (
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={product?.image}
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">
                                        {product?.title}
                                    </div>
                                    <div className="text-sm opacity-50 text-blue-700 font-bold">
                                        Price: {product?.price}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Quantity: {product?.inventory?.quantity}
                            <br />
                            <span className="text-primary">
                                Category: {product?.title}
                            </span>
                        </td>
                        <td>{product?.rating}</td>
                        <th className="w-fit">
                            <button className="w-fit">
                                {product?.description}
                            </button>
                        </th>
                        <td>d</td>
                    </tr>
                ))}
            </tbody>
            {/* foot */}
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    );
};

export default ProductsTable;

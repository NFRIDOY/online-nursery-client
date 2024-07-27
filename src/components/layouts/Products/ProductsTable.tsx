import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

const ProductsTable = () => {
    const [productList, setProductList] = useState([]);
    const publicAxios = useAxios();
    useEffect(() => {
        publicAxios.get("/products").then((res) => {
            setProductList(res?.data?.data);
            // console.log(res?.data?.data);
        });
    }, []);
    return (
        <table className="table table-xs lg:table lg:table-lg">
            {/* head */}
            <thead>
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
                {productList?.map((product) => (
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

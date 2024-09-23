import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Title from "../../ui/Title";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TProduct } from "../../../utils/types/product.interface";
import { IOrder } from "../../../redux/features/orderSlice/orderSlice";

const OrdersTable = () => {
    const [orderList, setOrderList] = useState([]);
    const [input, setInput] = useState("");

    const publicAxios = useAxios();
    // useEffect(() => {
    //     publicAxios.get("/orders").then((res) => {
    //         setOrderList(res?.data?.data);
    //         // console.log(res?.data?.data);
    //     });
    // }, []);

    const {
        isPending: isPendingOrders,
        error: errorOrders,
        data: orderData,
        refetch: refetchOrders,
    } = useQuery({
        queryKey: ["orders", input],
        queryFn: async () =>
            await publicAxios.get(`/orders`).then((res) => {
                return res.data;
            }),
    });

    const handleChange = (value) => {
        setInput(value);
        // fetchData(value);
    };

    const handleOrder = (orderId) => {
        console.log(orderId)
    };

    return (
        <table className="table table-xs lg:table lg:table-xs ">
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
                <tr className="*:text-center">
                    <th>Name</th>
                    <th>Category & Stock</th>
                    <th>Grand Total</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                {orderData?.data?.map((order: IOrder) => (
                    <tr className="*:text-center ">
                        <td>
                            <div className="flex items-center gap-3 md:ml-10">
                                {/* <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={order?.image}
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div> */}
                                <div>
                                    <div className="font-bold">
                                        {order?.customerName}
                                    </div>
                                    <div className="text-sm opacity-50 text-red-600 font-bold">
                                        Phone: {order?.customerPhone}
                                    </div>
                                    <div className="text-sm opacity-50 font-bold">
                                        {order?.customerAddress}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {order?.products?.map((product: TProduct) => (
                                <>
                                    <div key={product?.title} className="my-3">
                                        <div className="space-x-2">
                                            <span>
                                                {product?.title}
                                                {" = "}
                                            </span>
                                            <span>
                                                {product?.price}
                                                {"/="}
                                            </span>
                                            <span>
                                                {product?.quantity}
                                                {" Pcs"}
                                            </span>
                                        </div>
                                        {product?.inventory?.inStock ? (
                                            <div className="text-green-600">
                                                Available:{" "}
                                                {product?.inventory?.quantity}
                                            </div>
                                        ) : (
                                            "Stock Out"
                                        )}
                                    </div>
                                </>
                            ))}
                        </td>
                        {/* <th className="w-fit">
                            <button className="w-fit">
                                {order?.description}
                            </button>
                        </th> */}
                        <td>
                            <div>{order?.grandTotal}</div>
                        </td>
                        <td>
                            <button
                                type="submit"
                                // to={`/admin/order/update/${order?._id}`}
                                onClick={() => handleOrder(order?._id)}
                                className="btn btn-primary">
                                Confimed
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            {/* foot */}
            {/* <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot> */}
        </table>
    );
};

export default OrdersTable;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FormEvent, useState } from "react";
import { confirmOrder } from "../../../redux/features/orderSlice/orderSlice";

const MakeOrder = () => {
    const order = useSelector((state: RootState) => state.order);
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    // Create local state for the form fields
    const [formData, setFormData] = useState({
        customerName: "",
        customerPhone: "",
        customerEmail: "",
        customerAddress: "",
    });

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Dispatch action to update the order in Redux
        dispatch(
            confirmOrder({
                ...cart,
                ...formData,
            })
        );

        // console.log("Order registered:", formData);
        console.log("Order registered::::::::::::::::", {
            ...cart,
            ...formData,
        });
        console.log("Order registered====", order);

        // TODO: Navigate to payment page
    };

    return (
        <div>
            <div className="max-w-lg mx-auto  bg-white  rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                <h1 className="text-xl font-bold text-center text-gray-700  mb-8">
                    Customer Info
                </h1>
                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit}>
                    <div className="flex items-start flex-col justify-start">
                        <label
                            htmlFor="customerName"
                            className="text-sm text-gray-700  mr-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="customerName"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label
                            htmlFor="customerPhone"
                            className="text-sm text-gray-700  mr-2">
                            Phone:
                        </label>
                        <input
                            type="text"
                            id="customerPhone"
                            name="customerPhone"
                            value={formData.customerPhone}
                            onChange={handleChange}
                            className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label
                            htmlFor="customerEmail"
                            className="text-sm text-gray-700  mr-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="customerEmail"
                            name="customerEmail"
                            value={formData.customerEmail}
                            onChange={handleChange}
                            className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label
                            htmlFor="customerAddress"
                            className="text-sm text-gray-700  mr-2">
                            Address:
                        </label>
                        <input
                            type="text"
                            id="customerAddress"
                            name="customerAddress"
                            value={formData.customerAddress}
                            onChange={handleChange}
                            className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-md shadow-sm">
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeOrder;

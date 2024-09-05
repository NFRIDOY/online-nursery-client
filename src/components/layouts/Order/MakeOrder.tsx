import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";

const MakeOrder = () => {
    const order = useSelector((state: RootState) => state.order);
    
    return (
        <div>
            <div className="max-w-lg mx-auto  bg-white  rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                <h1 className="text-xl font-bold text-center text-gray-700  mb-8">
                    Customer Info
                </h1>
                <form className="w-full flex flex-col gap-4">
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
                            className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                            className="w-full px-3   py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-md shadow-sm">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeOrder;

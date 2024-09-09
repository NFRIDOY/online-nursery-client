import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import { addToCart, decrementQuantity, removeFromCart } from "../../../redux/features/cartSlice/cartSlice";

const Cart = () => {
    const { products, totalAmount } = useSelector(
        (state: RootState) => state.cart
    );
    const order = useSelector((state: RootState) => state.order);
    const dispatch = useDispatch();

    const hanldeSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        // const fomr = form.

        console.log("Clicking");
    };
    console.log("products ==>", products)
    return (
        <div>
            <form
                className="max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400"
                onSubmit={hanldeSubmit}>
                <div className="px-4 py-2 border-b border-gray-200">
                    <h2 className="font-semibold text-gray-800">
                        Shopping Cart
                    </h2>
                </div>
                <div className="flex flex-col divide-y divide-gray-200">
                    {products?.map((product) => (
                        <div className="flex items-center py-4 px-6">
                            <img
                                className="w-16 h-16 object-cover rounded"
                                src={product?.image}
                                alt="Product Image"
                            />
                            <div className="ml-3">
                                <h3 className="text-gray-900 font-semibold">
                                    {product?.title}
                                </h3>
                                <p className="text-gray-700 mt-1">
                                    ৳{product?.price * product?.quantity}
                                </p>
                                <div className="flex justify-center items-center gap-2">
                                    <button
                                        className="btn btn-secondary btn-xs"
                                        onClick={() =>
                                            dispatch(
                                                decrementQuantity(product?._id as string)
                                            )
                                        }>
                                        -
                                    </button>
                                    <p className="text-gray-700 mt-1">
                                        {product?.quantity}
                                    </p>
                                    <button
                                        className="btn btn-secondary btn-xs"
                                        onClick={() =>
                                            dispatch(
                                                addToCart({
                                                    ...product,
                                                    quantity: 1,
                                                })
                                            )
                                        }>
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                className="ml-auto py-2 px-4 bg-error hover:bg-red-800 text-white rounded-lg"
                                onClick={() =>
                                    dispatch(removeFromCart(product?._id as string))
                                }>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                    <h3 className="text-gray-900 font-semibold">
                        Sub Total: ${totalAmount.toFixed(2)}
                    </h3>
                </div>
                <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                    <h3 className="text-gray-900 font-semibold">
                        Delivery Fee: $
                        {totalAmount && order?.deliveryFee.toFixed(2)}
                        {/* // TODO: */}
                    </h3>
                </div>
                <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                    <h3 className="text-gray-900 font-semibold">
                        Total: ${(totalAmount + order?.deliveryFee).toFixed(2)}
                    </h3>
                    {totalAmount == 0 ? (
                        <button
                            // TODO: Dispatch // Confirm that the order
                            className="py-2 px-4 bg-gray-400 text-white rounded-lg"
                            type="submit">
                            Checkout
                        </button>
                    ) : (
                        <Link
                            to={"/confimOrder"}
                            // TODO: Dispatch // Confirm that the order
                            className="py-2 px-4 bg-primary hover:bg-green-800 text-white rounded-lg"
                            type="submit">
                            Checkout
                        </Link>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Cart;

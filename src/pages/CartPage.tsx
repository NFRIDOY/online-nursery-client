import Cart from "../components/layouts/Order/Cart";

const CartPage = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mt-10">
            <div className="w-full">
                <Cart />
            </div>
        </div>
    );
};

export default CartPage;

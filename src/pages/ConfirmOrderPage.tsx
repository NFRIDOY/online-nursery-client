import MakeOrder from "../components/layouts/Order/MakeOrder";


const ConfirmOrderPage = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mt-10">
            <div className="w-full">
                <MakeOrder />
            </div>
            {/* <div className="w-full">
                <Cart />
            </div> */}
        </div>
    );
};

export default ConfirmOrderPage;

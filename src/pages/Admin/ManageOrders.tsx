import OrdersTable from "../../components/layouts/Order/OrdersTable";
import Title from "../../components/ui/Title";

export default function ManageOrders() {
    return (
        <div className="overflow-y-auto">
            <div className="flex gap-x-5">
                <div className="overflow-y-auto h-full w-full">
                    {/* <h1 className="text-center text-2xl mt-5"></h1> */}
                    <Title>Orders</Title>
                    <OrdersTable />
                </div>
            </div>
        </div>
    );
}

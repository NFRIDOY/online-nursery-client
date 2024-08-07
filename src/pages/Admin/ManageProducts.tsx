import ProductsTable from "../../components/layouts/Products/ProductsTable";
import Title from "../../components/ui/Title";

const ManageProducts = () => {
    return (
        <div className="overflow-y-auto">
            <div className="flex gap-x-5">
                <div className="overflow-y-auto h-full w-full">
                    {/* <h1 className="text-center text-2xl mt-5"></h1> */}
                    <Title>Plants</Title>
                    <ProductsTable />
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;

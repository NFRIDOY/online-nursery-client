import { useParams } from "react-router-dom";
import UpdateProductForm from "../../components/ui/Forms/UpdateProductForm";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

const UpdateProduct = () => {
    const { id } = useParams();
    // console.log(id)

    const publicAxios = useAxios();

    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: productData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () =>
            await publicAxios.get(`/products/${id}`).then((res) => {
                return res.data;
            }),
    });

    // console.log(productData?.data)

    return (
        <div className="flex justify-center items-center">
            {/* UpdateProduct {id} */}

            <UpdateProductForm id={id} product={productData?.data} />
        </div>
    );
};

export default UpdateProduct;

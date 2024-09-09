import { useForm, SubmitHandler } from "react-hook-form";
import { TProduct } from "../../../utils/types/product.interface";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { TCategory } from "../../../utils/types/category.interface";

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

// const HoverImage = ({ url }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             style={{ position: "relative", display: "inline-block" }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}>
//             <span>{url}</span>
//             {isHovered && url && (
//                 <img
//                     src={url}
//                     alt="Hover Preview"
//                     style={{
//                         position: "absolute",
//                         top: "100%",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         maxWidth: "200px",
//                         maxHeight: "200px",
//                         border: "1px solid #ccc",
//                         backgroundColor: "#fff",
//                         zIndex: 1000,
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

export default function UpdateProductForm({ id, product }) {
    const publicAxios = useAxios();

    const [category, setCategory] = useState();

    // fatching category
    const {
        isPending: isPendingCategory,
        error: errorCategory,
        data: categoryData,
        refetch: refetchCategory,
    } = useQuery({
        queryKey: ["category"],
        queryFn: async () =>
            await publicAxios.get(`/category`).then((res) => {
                return res.data;
            }),
    });

    // Find the selected category object by ID
    const selectedCategory = categoryData?.data?.find(
        (categoryObj: TCategory) => categoryObj._id === category
    );

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TProduct>();
    const onSubmit: SubmitHandler<TProduct> = async (data) => {
        console.log(data);
        const plantData = {
            _id: data?._id,
            image: data?.image,
            title: data?.title,
            description: data?.description,
            price: data?.price,
            category: data?.category,
            rating: data?.rating,
            isDeleted: data?.isDeleted,
            // inventory.quantity: watch("quantity"),
            inventory: {
                quantity: watch("quantity"),
                inStock: watch("quantity") != 0 ? true : false,
            },
        };
        console.log("plantData => ", plantData);
        try {
            const response = await publicAxios.put(
                `/products/${id}`,
                plantData
            );
            console.log(response);
        } catch (error) {
            console.log("Error Updating Product");
        }
    };

    const imageUrl = watch("image");

    return (
        <div>
            {/* "handleSubmit" will validate your inputs before invoking
            "onSubmit" */}
            <section className=" w-full">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full border-2">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl w-full">
                            Update Product Details
                        </h1>
                        <div>
                            <img src={imageUrl || product?.image} alt="" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="gap-y-2 gap-x-2 mb-2 w-full grid grid-cols-2 ">
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Title"
                                        defaultValue={product?.title}
                                        {...register("title", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Price"
                                        defaultValue={product?.price}
                                        {...register("price", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="image"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Imege URL
                                    </label>
                                    <input
                                        type="text"
                                        id="image"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Image"
                                        defaultValue={product?.image}
                                        {...register("image", {
                                            required: true,
                                        })}
                                        // style={{ width: "300px", marginRight: "10px" }}
                                    />
                                    {/* {imageUrl ? <HoverImage url={imageUrl} /> : null} */}
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Description"
                                        defaultValue={product?.description}
                                        {...register("description", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 w-full">
                                        Category
                                    </label>

                                    <div>
                                        <select
                                            value={category}
                                            onChange={(e) =>
                                                setCategory(e.target.value)
                                            }
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
                                            {categoryData?.data?.map(
                                                (categoryObj) => (
                                                    <option
                                                        key={categoryObj?._id}
                                                        value={
                                                            categoryObj?._id
                                                        }>
                                                        {categoryObj?.title}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>

                                    {/* <input
                                        type="text"
                                        id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Category"
                                        value={category}
                                        onChange={(e) =>
                                            setCategory(e.target.value)
                                        }
                                    /> */}
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        In Stock Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="quantity"
                                        defaultValue={
                                            product?.inventory?.quantity
                                        }
                                        {...register("quantity", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="rating"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Rating
                                    </label>
                                    <input
                                        type="text"
                                        id="rating"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Rating"
                                        defaultValue={product?.rating}
                                        {...register("rating", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

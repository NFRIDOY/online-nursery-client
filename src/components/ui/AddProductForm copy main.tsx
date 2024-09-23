import { FormEvent, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { TCategory } from "../../utils/types/category.interface";

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export default function AddProductForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState("");
    const [rating, setRating] = useState("");

    // declare
    const publicAxios = useAxios();

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
        (categoryObj: TCategory) => categoryObj?._id === category
    );

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = {
            title,
            price: parseFloat(price),
            image,
            description,
            category: selectedCategory,
            inventory: {
                quantity: parseFloat(quantity),
                inStock: parseFloat(quantity) ? true : false,
            },
            rating: parseFloat(rating),
        };
        // console.log("Form Data:", formData);
        // Send Data to server
        publicAxios.post("/products", formData).then((res) => {
            // console.log(res);
            if (res?.data?.success) {
                // console.log("Success");
            } else {
                // console.log("Something went wrong::", res);
            }
        });
        // if(result)
    };

    return (
        <div className="w-full">
            {/* "handleSubmit" will validate your inputs before invoking
            "onSubmit" */}
            <section className=" w-full">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full border-0">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl w-full">
                            Add Plant To Inventory
                        </h1>
                        <form onSubmit={handleSubmit}>
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
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
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
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="image"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        id="image"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Image"
                                        value={image}
                                        onChange={(e) =>
                                            setImage(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Quantity"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(e.target.value)
                                        }
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
                                        value={rating}
                                        onChange={(e) =>
                                            setRating(e.target.value)
                                        }
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
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                ADD
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { useForm, SubmitHandler } from "react-hook-form";
import { TProduct } from "../../utils/types/product.interface";

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export default function AddProductForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TProduct>();
    const onSubmit: SubmitHandler<TProduct> = (data) => {
        console.log(data);
        const plantData = {
            ...data,
        };
    };

    console.log(watch("title")); // watch input value by passing the name of it
    return (
        <div>
            {/* "handleSubmit" will validate your inputs before invoking
            "onSubmit" */}
            <section className=" w-full">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full border-0">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl w-full">
                            Add Plant To Inventory
                        </h1>
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
                                        defaultValue=""
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
                                        defaultValue=""
                                        {...register("image", {
                                            required: true,
                                        })}
                                    />
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
                                        defaultValue=""
                                        {...register("description", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Category"
                                        defaultValue=""
                                        {...register("category", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="quantity"
                                        defaultValue=""
                                        {...register("quantity", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Rating
                                    </label>
                                    <input
                                        type="text"
                                        id="rating"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Rating"
                                        defaultValue=""
                                        {...register("rating", {
                                            valueAsNumber: true,
                                        })}
                                    />
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

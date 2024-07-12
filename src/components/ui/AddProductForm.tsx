import { useForm, SubmitHandler } from "react-hook-form";

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

type Inputs = {
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
    inventory: TInventory;
    rating: number;
    isDeleted: boolean;
};
export default function AddProductForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    console.log(watch("title")); // watch input value by passing the name of it
    return (
        <div>
            {/* "handleSubmit" will validate your inputs before invoking
            "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("title")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("price", { required: true })} />
                {/* errors will return when field validation fails  */}
                {/* {errors.priceRequired && <span>This field is required</span>} */}

                <input type="submit" />
            </form>
            <section className=" w-full">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full border-0">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl w-full">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-3 w-full"
                            onSubmit={handleSubmit(onSubmit)}>
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
                                    defaultValue=""
                                    {...register("title", { required: true })}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="Price"
                                    defaultValue=""
                                    {...register("price", { required: true })}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900">
                                    Imege URL
                                </label>
                                <input
                                    type="text"
                                    id="image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="Image"
                                    defaultValue=""
                                    {...register("image", { required: true })}
                                />
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

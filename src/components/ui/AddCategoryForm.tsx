import { FormEvent, useState } from "react";
import useAxios from "../../hooks/useAxios";

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export default function AddCategoryForm() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    // declare
    const publicAxios = useAxios();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = {
            title,
            image,
        };
        // console.log("Form Data:", formData);
        // You can add your form submission logic here, like sending the data to an API

        // Send Data to server
        publicAxios.post("/category", formData).then((res) => {
            // console.log(res);
            if (res?.data?.success) {
                // console.log("Success");
            } else {
                // console.log("Something went wrong::", res);
            }
        });
    };

    return (
        <div className="w-full">
            {/* "handleSubmit" will validate your inputs before invoking
            "onSubmit" */}
            <section className=" w-full">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full border-0">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl w-full">
                            Add Category
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="gap-y-2 gap-x-2 mb-2 w-full grid grid-cols-2 ">
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        Category Title
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

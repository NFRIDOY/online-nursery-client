import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "../../utils/types/product.interface";

export const baseApi = createApi({
    reducerPath: "baseApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    baseQuery: fetchBaseQuery({ baseUrl: "https://online-nursery-server-nine.vercel.app/api" }),
    endpoints: (builder) => ({
        getProducts: builder.query<TProduct, void>({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetProductsQuery } = baseApi;

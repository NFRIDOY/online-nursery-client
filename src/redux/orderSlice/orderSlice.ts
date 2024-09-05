import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../utils/types/product.interface";

export interface CartState {
    products: TProduct[];
    totalAmount: number;
}

const initialState: CartState = {
    products: [],
    totalAmount: 0,
};

export const orderSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            const existingItem = state.products.find((item) => item._id === action.payload._id);

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }

            state.totalAmount += action.payload.price * action.payload.quantity;
        },
        // id as payload for removing from cart
        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemToRemove = state.products.find(
                (item) => item._id === action.payload
            );

            if (itemToRemove) {
                state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
                state.products = state.products.filter(
                    (item) => item._id !== action.payload
                );
            }
        },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = orderSlice.actions;

export default orderSlice.reducer;

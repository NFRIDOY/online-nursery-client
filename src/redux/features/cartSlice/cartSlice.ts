import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TInventory} from "../../../utils/types/product.interface";
import { TCategory } from "../../../utils/types/category.interface";

export type IProduct = {
    _id?: string;
    image: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    category?: TCategory;
    inventory: TInventory;
    rating: string;
    isDeleted: boolean;
};
export interface ICart {
    products: IProduct[];
    totalAmount: number;
}

const initialState: ICart = {
    products: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.products.find(
                (item) => item._id === action.payload._id
            );
            // if (existingItem?.inventory.quantity) {
            if (true) {
                if (existingItem) {
                    existingItem.quantity += action.payload.quantity;
                } else {
                    state.products.push(action.payload);
                }
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
        // id as payload for removing from cart
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const itemToDecrement = state.products.find(
                (item) => item._id === action.payload
            );
        
            if (itemToDecrement) {
                // First decrement the quantity
                itemToDecrement.quantity -= 1;
        
                // If quantity becomes 0, remove the item from the cart
                if (itemToDecrement.quantity === 0) {
                    state.products = state.products.filter(
                        (item) => item._id !== action.payload
                    );
                }
        
                // Subtract the price from total amount after decrement
                state.totalAmount -= itemToDecrement.price;
            }
        },
        
        resetOrder: () => initialState,
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, decrementQuantity } =
    cartSlice.actions;

export default cartSlice.reducer;

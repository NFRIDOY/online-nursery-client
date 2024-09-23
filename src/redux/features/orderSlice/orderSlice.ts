import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../cartSlice/cartSlice";

export interface ICartIdQuantity {
    _id: string;
    quantity: string;
}

// export interface IOrder {
//     customerId?: string;
//     customerName: string;
//     customerPhone: string;
//     customerEmail: string;
//     customerAddress: string; // TODO: this should be a object of strings
//     cart: ICartIdQuantity[];
//     // deliveryFee?: 100;
//     grandTotal?: number;
// }
export interface IOrder extends ICart {
    customerId?: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerAddress: string; // TODO: this should be a object of strings
    deliveryFee?: number;
    grandTotal?: number;
    status: string;
    isDeleted: boolean;
}

// const initialState: IOrder = {
//     cart: [],
//     // totalAmount: 0,
//     customerName: "",
//     customerPhone: "",
//     customerEmail: "",
//     customerAddress: "",
//     deliveryFee: 100,
//     grandTotal: 0,
// };

const initialState: IOrder = {
    products: [],
    totalAmount: 0,
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    customerAddress: "",
    deliveryFee: 100,
    grandTotal: 0,
    status: "PENDING",
    isDeleted: false
};

export const orderSlice = createSlice({
    name: "Order",
    initialState,
    reducers: {
        confirmOrder: (state, action: PayloadAction<IOrder>) => {

            state.products = action.payload?.products;
            state.totalAmount = action.payload?.totalAmount;
            state.customerName = action.payload?.customerName;
            state.customerPhone = action.payload?.customerPhone;
            state.customerAddress = action.payload?.customerAddress;
            state.deliveryFee = 100;
            state.grandTotal = action.payload.totalAmount + 100;
        },
        // confirmOrder: (state, action: PayloadAction<IOrder>) => {
        //     state.products = action.payload?.products;
        //     state.totalAmount = action.payload?.totalAmount;
        //     state.customerName = action.payload?.customerName;
        //     state.customerPhone = action.payload?.customerPhone;
        //     state.customerAddress = action.payload?.customerAddress;
        //     state.deliveryFee = 100;
        //     state.grandTotal = action.payload.totalAmount + 100;
        // },

        cancelOrder: () => initialState,

        deleteOrder: () => initialState,

        resetOrder: () => initialState,
    },
});

// Action creators are generated for each case reducer function
export const { confirmOrder, cancelOrder, deleteOrder, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;

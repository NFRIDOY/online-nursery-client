import { TCategory } from "./category.interface";

export type category = {
    name: string;
};

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export type TProduct = {
    _id?: string;
    image: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    category?: TCategory | category;
    inventory?: TInventory;
    rating: string;
    isDeleted: boolean;
};

// error solving for temporary 
// const obj : TProduct ={ 
//     _id:"1",
//     image: "1",
//     title: "1",
//     description: "1",
//     price: 1,
//     quantity: 1,
//     rating: "1",
//     isDeleted: false,
// }

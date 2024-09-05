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
    inventory: TInventory;
    rating: number | string;
    isDeleted: boolean;
};

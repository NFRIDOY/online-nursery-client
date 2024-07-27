export type category = {
    name: string;
};

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export type TProduct = {
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
    inStock: boolean;
    rating: number;
    isDeleted: boolean;
};

export interface ProductInput {
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface Product extends ProductInput {
    productId: string;
    user?: string;
    createdAt: Date;
    updatedAt: Date;
}

export let products: Product[] = [];

export interface Product {
    id: number;
    name: string;
    category: Category;
    price: number;

}

export type Category = 'Lacteos' | 'Carnes' | 'Frutas' | 'Verduras';
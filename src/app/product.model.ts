export class Product implements IProduct {
    id?: number;
    version: number = 0;
    description: string = '';
    productId: string = '';
    result: string = '';
    inputs: number[] = [];
}

export interface IProduct {
    id?: number;
    version: number;
    description: string;
    productId: string;
    result: string;
    inputs: number[];
}
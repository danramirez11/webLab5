export interface Food {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface Bill {
    food: Food[];
    tipPer: number;
    subtotal: number;
    tip: number;
    total: number;
}
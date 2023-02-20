export interface Product {
    imageUrl: string;
    name: string;
    undiscounted_price: string;
    discounted_price: string;
    store_link: string;
}

export interface Service {
    name: string;
    imageUrl: string;
}

export interface DataApiResponseType {
    products: Product[];
    services: Service[];
}

export interface PaginatedResponse {
    status: string;
    message: string;
    data: Data;
}

export interface Data {
    page_info: PageInfo;
    products: Product[];
}

export interface PageInfo {
    total: number;
    current_page: number;
    total_pages: number;
}

export interface Product {
    _id: string;
    name: string;
    price: number;
    currency: Currency;
    description: string;
    sku: string;
    slug: string;
    qty: number;
    weight?: number;
    display_image: string;
    is_visible: boolean;
    meta: Meta;
    variants: any[];
    merchant: number;
    sold: number;
    ts: number;
    __v: number;
    gallery?: any[];
}

export enum Currency {
    Ngn = "NGN",
}

export interface Meta {
    gallery: Gallery[];
    options: any[];
    discount: Discount;
}

export interface Discount {
    original_price: number;
    has_discount: boolean;
}

export interface Gallery {
    filename: string;
    mimetype: Mimetype;
    url: string;
}

export enum Mimetype {
    ImageJPEG = "image/jpeg",
}

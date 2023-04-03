import { PaginatedResponse, Product } from "./types";

export async function getAllProducts(): Promise<Product[]> {
    const products: Product[] = [];
    let page = 1;
    let totalPages = 1;
    try {
        while (page <= totalPages) {
            const url = `https://api.ravepay.co/v2/inventory/checkout_products?public_key=FLWPUBK-33545c06c2954c4aed6265670c194722-X&page=${page}`;
            const response = await fetch(url);
            const json: PaginatedResponse = await response.json();

            console.log({ json });

            products.push(...json.data.products);

            page = json.data.page_info.current_page + 1;
            totalPages = json.data.page_info.total_pages;
        }

        return products;
    } catch (error) {
        console.log("error fetching products: ", error);
        return products;
    }
}

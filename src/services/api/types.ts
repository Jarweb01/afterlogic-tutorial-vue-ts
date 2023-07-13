export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>
}

export interface ITodo {
    id: string;
    todo: string;
    completed: boolean;
    userId: number;
}

// Здесь добавил свойство data, потому что getAllProducts возвращает полный response, а не только поле data
export interface getAllProductsResponse {
        products: IProduct[];
        total: number;
        skip: number;
        limit: number;
}

// Здесь добавил свойство data, потому что getAllTodos возвращает полный response, а не только поле data
export interface getAllTodosResponse {
        todos: ITodo[];
        total: number;
        skip: number;
        limit: number;
}

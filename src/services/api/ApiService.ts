import instance from '@/services/api/instance'
import type { getAllProductsResponse, getAllTodosResponse } from '@/services/api/types'

// https://dummyjson.com/docs/products
export const getAllProducts = (): Promise<getAllProductsResponse> => {
    return instance.get('/products');
}

// https://dummyjson.com/docs/todos
export const getAllTodos = (limit: number, skip: number): getAllTodosResponse => {
  return instance.get(`/todos?limit=${limit}&skip=${skip}`)
}

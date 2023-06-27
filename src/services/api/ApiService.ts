import type { AxiosResponse } from 'axios'
import instance from '@/services/api/instance.js'
import type { getAllProductsResponse, getAllTodosResponse } from '@/services/api/types'

export const getAllProducts = (): Promise<AxiosResponse<getAllProductsResponse>> => {
    return instance.get<getAllProductsResponse>('/products')
}

export const getAllTodos = (
    limit: number,
    skip: number
): Promise<AxiosResponse<getAllTodosResponse>> => {
    return instance.get<getAllTodosResponse>(`/todos?limit=${limit}&skip=${skip}`)
}

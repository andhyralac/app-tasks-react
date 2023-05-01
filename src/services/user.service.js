import { apiClient } from './axios'


export const createUser = async (user) => {
    return await apiClient.post('/users', user)
}
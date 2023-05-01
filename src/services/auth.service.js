import { apiClient } from './axios'



export const auth = async (user) => {
    return await apiClient.post('/auth', user)
}
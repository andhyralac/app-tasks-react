import { apiClient } from './axios'

let token = null

export const setToken = newToken => {
    token = newToken
}


export const getAllTaskByUser = async () => {
    const config = {
        headers: {
            "x-token": token
        }
    }
    return await apiClient.get('/tasks', config)
}


export const createTask = async (task) => {
    const config = {
        headers: {
            "x-token": token
        }
    }
    return await apiClient.post('/tasks', { task }, config)
}


export const deleteTask = async (id) => {
    const config = {
        headers: {
            "x-token": token
        }
    }
    return await apiClient.delete(`/tasks/${id}`, config)
}
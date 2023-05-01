import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://server-tasks.onrender.com/api/v1'
})

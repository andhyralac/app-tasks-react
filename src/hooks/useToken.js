import { useEffect, useState } from 'react'
import * as localStorage from '../services/localStorage.js'

export const useToken = () => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        addToken()
    }, [])

    const addToken = () => {
        const tokenUser = localStorage.get()
        if (tokenUser) {
            setToken(tokenUser)
        }
    }

    const clearToken = () => {
        setToken(null)
        localStorage.clear()
    }

    return {
        token,
        addToken,
        clearToken
    }
}
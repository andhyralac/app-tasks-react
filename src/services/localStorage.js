export const get = () => {
    return window.localStorage.getItem('x-token')
}


export const add = (token) => {
    window.localStorage.setItem('x-token', token)
}


export const clear = () => {
    window.localStorage.removeItem('x-token')
}
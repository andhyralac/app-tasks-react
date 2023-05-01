import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAllowed, children, reditectTo='/' }) => {
    if (!isAllowed) {
        return <Navigate to={reditectTo} />
    }
    return children ? children : <Outlet />
}


export default ProtectedRoute
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar, ProtectedRoute } from './components'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import CreateTaskPage from './pages/CreateTaskPage'
import CreateUserPage from './pages/CreateUserPage'
import { useToken } from './hooks/useToken'
import './App.css'


function App() {

  const { token, clearToken, addToken } = useToken()

  return (
    <BrowserRouter>
      <div>
        <Navbar tokenUser={token} clearToken={clearToken} />
      </div>

      <Routes>
        <Route element={<ProtectedRoute isAllowed={!token} reditectTo='/home' />}>
          <Route path='/' element={<LoginPage addToken={addToken} />} />
          <Route path='/register' element={<CreateUserPage addToken={addToken}  />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={token} />}>
          <Route path='/home' element={<HomePage tokenUser={token} />} />
          <Route path='/create' element={<CreateTaskPage tokenUser={token} />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

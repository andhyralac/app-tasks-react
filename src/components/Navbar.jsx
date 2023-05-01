import { NavLink } from 'react-router-dom'
import * as localStorage from '../services/localStorage'



const Navbar = ({ tokenUser, clearToken }) => {

  const handleClick = () => {
    clearToken()
  }

  return (
    <nav className="navbar navbar-expand-md border-bottom border-secondary shadow-lg mb-4">
      <div className="container-fluid">
        {tokenUser ? (
          <>
            <span className="navbar-brand text-white fw-bold ms-2">
              APP TASKS
            </span>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item">
                <NavLink className="btn btn-outline-info" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-1">
                <NavLink className="btn btn-outline-success" to="/create">
                  Create
                </NavLink>
              </li>
              <li className="nav-item ms-1">
                <NavLink className="btn btn-outline-warning" onClick={handleClick} to="/">
                  Logout
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <span className="navbar-brand text-white fw-bold ms-2">
            APP TASKS
          </span>
        )}
      </div>
    </nav>
  )
}

export default Navbar

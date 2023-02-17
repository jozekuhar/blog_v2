import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext)
  

  if (!user) {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link onClick={logoutUser}>Logout</Link>
    </div>
  )
}

export default Navbar
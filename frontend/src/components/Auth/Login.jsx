import React, { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'

function Login() {
  const { loginUser } = useContext(AuthContext)
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  async function handleLogin(e) {
    e.preventDefault()
    await loginUser(loginData.username, loginData.password)
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) => setLoginData(prev => ({...prev, username: e.target.value}))}
        />
        <input type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData(prev => ({...prev, password: e.target.value}))}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
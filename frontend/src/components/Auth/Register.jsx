import React, { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'

function Register() {
  const { registerUser, loginUser } = useContext(AuthContext)
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  })

  async function handleRegister(e) {
    e.preventDefault()
    await registerUser(
      registerData.username,
      registerData.email,
      registerData.password,
      registerData.rePassword,
    )
    await loginUser(registerData.username, registerData.password)
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input type="text"
          placeholder="Username"
          value={registerData.username}
          onChange={(e) => setRegisterData(prev => ({...prev, username: e.target.value}))}
        />
        <input type="email"
          placeholder="Email"
          value={registerData.email}
          onChange={(e) => setRegisterData(prev => ({...prev, email: e.target.value}))}
        />
        <input type="password"
          placeholder="Password"
          value={registerData.password}
          onChange={(e) => setRegisterData(prev => ({...prev, password: e.target.value}))}
        />
        <input type="password"
          placeholder="Password"
          value={registerData.rePassword}
          onChange={(e) => setRegisterData(prev => ({...prev, rePassword: e.target.value}))}
        />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
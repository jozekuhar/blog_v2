import styled from 'styled-components'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

function Register() {
  const { registerUser, loginUser, error } = useContext(AuthContext)
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
    <Container>
      <Title>Register</Title>
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
          placeholder="Confirm Password"
          value={registerData.rePassword}
          onChange={(e) => setRegisterData(prev => ({...prev, rePassword: e.target.value}))}
        />
        <button>Register</button>
      </form>
      <Extra>
        <p>Already have an account?</p>
        <Link to="/login">Login here</Link>
      </Extra>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    input, button {
      height: 60px;
      margin-top: 15px;
      border: none;
      background-color: #F6F6F6;
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      ::placeholder {
        font-size: 18px;
        color: #C6C6C6;
      }
    }
    button {
      margin-top: 25px;
      background-color: #003049;
      color: #FFFFFF;
      cursor: pointer;
      :active {
        opacity: 0.9;
      }
    }
  }
`
const Title = styled.span`
  margin-top: 25px;
  margin-bottom: 10px;
  text-align: center;
  color: #003049;
  font-size: 24px;
  font-weight: 700;
`
const Extra = styled.div`
  margin-top: 25px;
  text-align: center;
  font-weight: 18px;
  font-weight: 300;
  a {
    text-decoration: underline;
  }
`

export default Register
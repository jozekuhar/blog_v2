import styled from 'styled-components'
import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import AuthContext from '../../context/AuthContext'

function Login() {
  const { loginUser, error } = useContext(AuthContext)
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  async function handleLogin(e) {
    e.preventDefault()
    await loginUser(loginData.username, loginData.password)
  }

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={handleLogin}>
        <input type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) => setLoginData(prev => ({...prev, username: e.target.value}))}
          required
        />
        <input type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData(prev => ({...prev, password: e.target.value}))}
          required
          error={error}
        />
        {error && <Error>{error.response.data.detail}</Error>}
        <button>Login</button>
      </form>
      <Extra>
        <p>Don’t have an account?</p>
        <Link to="/register">Join now</Link>
        <p>Forgotten Password?</p>
        <Link to="/reset">Reset Password</Link>
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
      
      background-color: #F6F6F6;
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      ::placeholder {
        font-size: 18px;
        color: #C6C6C6;
      }
    }
    input {
      border: ${props => props.error ? "1px solid red" : "none" };
    }
    button {
      margin-top: 25px;
      background-color: #003049;
      color: #FFFFFF;
      cursor: pointer;
      :checked {
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
const Error = styled.div`
  color: red;
  text-align: center;
  margin-top: 25px;
`

export default Login
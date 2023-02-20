import styled from 'styled-components'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Account() {
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <Container>
      <Title>User Informations</Title>
      <p>Username: {user.username} ({user.id})</p>
      <p>Email: {user.email}</p>
      <SubTitle>Change Email Address</SubTitle>
      <form>
        <input
          type="email"
          placeholder={user.email}
        />
        <button>New Email Address</button>
      </form>
      <SubTitle>Change Password</SubTitle>
      <form>
        <input
          type="password"
          placeholder="Current Password"
        />
        <input
          type="password"
          placeholder="New Password"
        />
        <input
          type="password"
          placeholder="Repeat New Password"
        />
        <button>Change Password</button>
      </form>
      <Logout onClick={logoutUser}>Logout</Logout>
    </Container>
  )
}

const Container = styled.div`
  background-color: #F6F6F6;
  margin: 20px 20px 20px 20px;
  padding: 20px;
  border-radius: 10px;
  form {
    display: flex;
    flex-direction: column;
  }
  input, button {
      height: 60px;
      margin-top: 15px;
      background-color: #FFFFFF;
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
      border: none;
      cursor: pointer;
      :checked {
        opacity: 0.9;
      }
    }
`
const Title = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  color: #003049;
`
const SubTitle = styled(Title)`
  margin-top: 25px;
  font-size: 18px;
`
const Logout = styled.p`
  margin-top: 15px;
  color: #780000;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    text-decoration: none;
  }
`

export default Account
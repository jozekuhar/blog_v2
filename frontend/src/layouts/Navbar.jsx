import styled from "styled-components"
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <Container>
      <LeftSection>
        {!user && 
        <Link to="/">
          MyBlog
        </Link>}
        
      </LeftSection>
      <RightSection>
        {!user && 
        <Link to="/login">
          Login
        </Link>}
        {user && <Link onClick={logoutUser}>Logout</Link>}
      </RightSection>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #780000;
`
const LeftSection = styled.div`
  margin-left: 10px;
`
const RightSection = styled.div`
  margin-right: 10px;
`

export default Navbar
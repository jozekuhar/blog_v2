import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import styled, { keyframes } from 'styled-components'
import AuthContext from '../context/AuthContext'

function Sidebar(props) {
  const { logoutUser } = useContext(AuthContext)
  
  function handleLogout() {
    props.toggle(false)
    logoutUser()
  }

  return (
    <Container show={props.show}>
      <Button onClick={() => props.toggle(prev=>!prev)}><img src="close.png" height={24} /></Button>
      <NavigationBox>
        <Link to="/"><SidebarLink>Home</SidebarLink></Link>
        <SidebarLink>Posts</SidebarLink>
        <SidebarLink>Popular Posts</SidebarLink>
        <Link to="/account"><SidebarLink>Account</SidebarLink></Link>
        <LogoutLink onClick={handleLogout}>Logout</LogoutLink>
      </NavigationBox>
    </Container>
  )
}

const animation = keyframes`
  0% {
    left: 300px;
  }
  100% {
    left: 0px;
  }
`

const Container = styled.div`
  visibility: ${props => props.show ? "show" : "hidden"};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(70%);
  background-color: #FDF0D5;
  animation: animation 5s linear;
`

const Button = styled.div`
  margin-left: 10px;
  margin-top: 9px;
  height: 42px;
  width: 42px;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #FFE9BB;
  }
  :active {
    opacity: 0.8;
  }
`
const NavigationBox = styled.div`
  margin-top: 40px;
`
const SidebarLink = styled.p`
  padding: 20px 17px;
  :hover {
    background-color: #FFE9BB;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
  }
  :active {
    opacity: 0.8;
  }
`
const LogoutLink = styled(SidebarLink)`
  color: #C1121F;
  :hover {
    text-decoration: underline;
  }
`

export default Sidebar
import styled from "styled-components"
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'
import Sidebar from "./Sidebar"


function Navbar() {
  const { user, logoutUser } = useContext(AuthContext)
  const [showSidebar, setShowSidebar] = useState(false) 

  return (
    <Container>
      <LeftSection>
        {user && <Button onClick={() => setShowSidebar(prev=>!prev)}><img src="hamburger.png" height={27} /></Button>}
        <Sidebar show={showSidebar} toggle={setShowSidebar} />
        {user && <Link to="/"><Button><img src="home.png" height={27} /></Button></Link>}
      </LeftSection>

      <RightSection>
        {!user && <Link to="/login"><Button><img src="user.png" height={24} /></Button></Link>}
        {user && <Link to="/account"><Button><img src="user.png" height={24} /></Button></Link>}
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
  position: relative;
  display: flex;
  margin-left: 10px;
`
const RightSection = styled.div`
  position: relative;
  margin-right: 10px;
`
const Button = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #660000;
  }
  :active {
    opacity: 0.8;
  }
`

export default Navbar
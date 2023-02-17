import styled from 'styled-components'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Home() {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <Title>Welcome back {user.username}</Title>
      <Section>
        <p>Username je</p>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  margin-top: 25px;
  margin-bottom: 10px;
  text-align: center;
  color: #003049;
  font-size: 24px;
  font-weight: 700;
`
const Section = styled.div`
  /* height: 125px; */
  margin-top: 15px;
  background-color: #F6F6F6;
`

export default Home
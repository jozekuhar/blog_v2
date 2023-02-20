import styled from 'styled-components'
import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import PostsList from '../components/Posts/PostsList'

function Home() {
  const { user } = useContext(AuthContext)

  console.log(user)

  return (
    <Container>
      <Title>Welcome back {user.username}</Title>
      <Title>Latest Posts</Title>
      <PostsList />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  margin-top: 5px;
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
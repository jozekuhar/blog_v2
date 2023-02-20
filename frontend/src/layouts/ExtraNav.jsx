import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

function ExtraNav() {
  return (
    <Container>
      <ul>
        <Link to="/"><li>All Posts</li></Link>
        <Link to="/"><li>My Posts</li></Link>
        <Link to="/"><li>Extra Posts</li></Link>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: center;
  padding: 5px;
  ul {
    display: flex;
    list-style: none;
    a {
      text-decoration: none;
      color: black;
      font-weight: 400;
    }
    li {
      margin: 0 5px 0 5px;
    }
  }
`

export default ExtraNav
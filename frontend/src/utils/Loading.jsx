import React from 'react'
import styled, { keyframes } from 'styled-components'

function Loading() {
  return (
    <Container>
      <Loader />
    </Container>
  )
}

const rotate = keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const Loader = styled.div`
  height: 60px;
  width: 60px;
  border: 10px solid whitesmoke;
  border-radius: 50%;
  border-top: 10px solid #669BBC;
  animation: ${rotate} 1s linear infinite;
`



export default Loading
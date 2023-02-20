import React from 'react'
import styled from 'styled-components'
import { CommentsList } from './Comments'

function PostDetail({post}) {
  const {title, content} = post

  return (
    <Container>
      <h1>{title}</h1>
      <p>{content}</p>

      <CommentsList />
      <p>more comment</p>
    </Container>
  )
}

const Container = styled.div`
  margin: 10px 0 10px 0;
  padding: 20px;
  background-color: #F6F6F6;
  h1 {
    font-size: 18px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
  }
`

export default PostDetail
import React from 'react'
import useFetch from '../../hooks/useFetch'
import PostDetail from './PostDetail'

function PostsList() {
  const { data, error, loading } = useFetch("http://localhost:8000/blog/posts/")

  let listPosts = null
  if (data) {
    listPosts = data.results.map(post => {
      return <PostDetail key={post.id} post={post}/>
    })
  }

  return (
    <>
      {listPosts}
    </>
  )
}

export default PostsList
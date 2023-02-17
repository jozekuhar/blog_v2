import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Home</h1>
      <p>Username: {user.username} </p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Home
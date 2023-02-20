import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import AuthContext from "../context/AuthContext"


function AnonymousRoute({children}) {
  const { user } = useContext(AuthContext)
  const location = useLocation()
  console.log(location)

  if (user) {
    return <Navigate to="/" />
  }

  return children
}

export default AnonymousRoute
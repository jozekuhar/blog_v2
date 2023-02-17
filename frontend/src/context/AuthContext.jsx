import axios from "axios"
import React, { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

function AuthProvider({children}) {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [authTokens, setAuthTokens] = useState(null)
  const [user, setUser] = useState(null)

  async function registerUser(username, email, password, rePassword) {
    try {
      const url = "/accounts/auth/users/"
      const response = await axios.post(url, {
        username: username,
        email: email,
        password: password,
        re_password: rePassword,
      })
    } catch(error) {
      console.log(error.response)
    }
  }

  async function loginUser(username, password) {
    try {
      const url = "/accounts/auth/jwt/create/"
      const response = await axios.post(url, {
        username: username,
        password: password
      })
      setAuthTokens(response.data)
      localStorage.setItem("authTokens", JSON.stringify(response.data))
      getUserData()
    } catch(error) {
      console.log(error.response)
    }
  }

  async function updateToken() {
    try {
      const url = "/accounts/auth/jwt/refresh/"   
      const response = await axios.post(url, {
        refresh: JSON.parse(localStorage.getItem("authTokens")).refresh
      })
      setAuthTokens(response.data)
      localStorage.setItem("authTokens", JSON.stringify(response.data))
      getUserData()
    } catch(error) {
      console.log(error.response)
    }
    if (loading) {
      setLoading(false)
    }
  }

  async function getUserData() {
    try {
      const url = "/accounts/auth/users/me/"
      const response = await axios.get(url, {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("authTokens")).access
        }
      })
      setUser(response.data)
    } catch(error) {
      console.log(error.response)
    }
  }

  function logoutUser() {
    localStorage.removeItem("authTokens")
    setAuthTokens(null)
    setUser(null)
  }

  useEffect(() => {
    if (loading) {
      updateToken()
    }
    const fourMinutes = 1000 * 60 * 4
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken()
      }
    }, fourMinutes)
    return () => clearInterval(interval)
  }, [authTokens])

  const context = {
    authTokens: authTokens,
    user: user,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  return (
    <AuthContext.Provider value={context}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}


export { AuthProvider }
export default AuthContext
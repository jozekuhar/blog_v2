import { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar, ExtraNav, Sidebar } from "./layouts"
import { PrivateRoute, AnonymousRoute, Loading } from "./utils"
import { Home } from "./pages"
import { Login, Register, ResetPassword } from "./components/Auth"
import "./axios/global"
import "./App.css"
import Account from "./pages/Account"
import AuthContext from "./context/AuthContext"


function App() {
  const { user } = useContext(AuthContext)

  console.log(user)

  return (
    <>
      <Navbar />
      {user && <ExtraNav />}
      <Routes>
        <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/login" element={<AnonymousRoute><Login /></AnonymousRoute>} />
        <Route path="/register" element={<AnonymousRoute><Register /></AnonymousRoute>} />
        <Route path="/reset" element={<AnonymousRoute><ResetPassword /></AnonymousRoute>} />
        <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  )
}

export default App

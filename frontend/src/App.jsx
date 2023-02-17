import { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar, Search, Sidebar } from "./layouts"
import { PrivateRoute, AnonymousRoute } from "./utils"
import { Home } from "./pages"
import { Login, Register } from "./components/Auth"
import "./axios/global"
import "./App.css"


function App() {

  return (
    <>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/login" element={<AnonymousRoute><Login /></AnonymousRoute>} />
        <Route path="/register" element={<AnonymousRoute><Register /></AnonymousRoute>} />
      </Routes>
    </>
  )
}

export default App

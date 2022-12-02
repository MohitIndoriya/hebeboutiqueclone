import {Routes,Route} from "react-router-dom"
import React from 'react'
import Signup from "../login/Signup"
import Login from "../login/login"
import { Cart } from "../cart/cart"

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/createAccount" element={<Signup/>} />
        <Route path="/" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

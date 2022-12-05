import {Routes,Route} from "react-router-dom"
import React from 'react'
import Signup from "../login/Signup"
import Login from "../login/login"
import { Cart } from "../cart/cart"
import Home from "../home/home"


export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/createAccount" element={<Signup/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

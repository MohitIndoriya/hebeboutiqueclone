import {Routes,Route} from "react-router-dom"
import React from 'react'
import Signup from "../login/Signup"
import Login from "../login/login"
import { Cart } from "../cart/cart"
import Dresses from "../pages/Dresses"
import Jewellery from "../pages/Jewellery"
import Shirts from "../pages/Shirts"
import Checkout from "../pages/Checkout"

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/createAccount" element={<Signup/>} />
        <Route path="/" element={<Login/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/dresses" element={<Dresses />} />
      <Route path="/jewellery" element={<Jewellery />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  )
}

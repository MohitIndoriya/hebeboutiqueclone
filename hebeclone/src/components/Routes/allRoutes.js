import {Routes,Route} from "react-router-dom"
import React from 'react'
import Signup from "../login/Signup"
import Login from "../login/login"
import { Cart } from "../cart/cart"

import Checkout from "../pages/Checkout"

import Home from "../home/home"
import Productpage from "../productpages/Productpage"



export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/createAccount" element={<Signup/>} />

        
     
     
      <Route path="/checkout" element={<Checkout/>}/>

        <Route path="/Login" element={<Login/>}/>
        <Route path="/products/:category" element={<Productpage/>}/>
       
        <Route path="/" element={<Home/>}/>

    </Routes>
  )
}

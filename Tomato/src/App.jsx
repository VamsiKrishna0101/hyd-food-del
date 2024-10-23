import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
// import './index.css'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/placeOrder/Order.jsx'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopUp/LoginPopup'
const App = () => {
  const[showlogin,setshowlogin]=useState(false)
  return (
    <>
    {showlogin?<LoginPopup setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Order/>} />
       </Routes>
    </div>
      <Footer/>
      </>

  )
}

export default App
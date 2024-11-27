import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Order from './pages/Order'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
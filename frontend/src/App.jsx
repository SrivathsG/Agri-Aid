import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter className='scroll-smooth'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
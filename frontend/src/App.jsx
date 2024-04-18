import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Hero from './components/hero/Hero';
import Results from './components/Results';
const App = () => {
  return (
    <BrowserRouter className='scroll-smooth'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/result' element={<Results/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
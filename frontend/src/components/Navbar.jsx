import React from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  const handleLoginClick =()=>{
    navigate('/login')
  }
  const handleHomeClick =()=>{
    navigate('/')
  }
  const handleAboutusClick =()=>{
    navigate('/aboutus')
  }
  return (
    <div className='flex items-center justify-between h-20 container-full'>
      <div className='text-center leading-7 text-2xl font-poppins cursor-pointer' onClick={handleHomeClick}>
        <span className='font-bold'>Agro</span>
        <span className='font-light'>Us</span>
      </div>
      <div className='nav-items flex gap-10 items-center text-center leading-7 font-roboto text-2xl'>
        <div className='cursor-pointer' onClick={handleHomeClick}>Home</div>
        <div className='cursor-pointer' onClick={handleAboutusClick}>About Us</div>
        <div className='cursor-pointer'>Contact Us</div>
        <button className='font-roboto text-2xl leading-7 text-center bg-green-700 text-white py-2 px-4 rounded-full'
        onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;

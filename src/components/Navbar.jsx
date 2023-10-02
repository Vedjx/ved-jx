import React from 'react'
import logo from '../assets/white.png';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <div className='bg-black/90 text-3xl w-full h-[90px] flex justify-between items-center fixed z-50'>
      <div className='pl-5'>
        <img className="min-w-[70px] w-[70px]" src={logo} />
      </div>
      <div className='md:flex justify-between items-center pr-5 text-white text-[20px] font-medium w-[400px] hidden'>
        <h1 className='cursor-pointer'>Home</h1>
        <h1 className='cursor-pointer'>Services</h1>
        <h1 className='cursor-pointer'>Our Work</h1>
        <h1 className='cursor-pointer'>Contact</h1>
      </div>

      <div className='flex md:hidden text-white pr-5'>
        <Icon className="text-[55px]" icon="majesticons:menu" />
      </div>
    </div>
  )
}

export default Navbar
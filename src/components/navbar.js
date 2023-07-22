import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll';
// import logo from '../images/logo.png'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen z-10 bg-green-950 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center py-[10px]'>
        <img src='/images/logo-nav.png'  alt='' className='h-[60px]' />
      
        <ul className='hidden md:flex uppercase '>
          <li className='text-white cursor-pointer'> 
            <Link to="home" smooth={true} duration={500}> Home </Link> 
          </li>
          <li className='text-white cursor-pointer'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='text-white cursor-pointer'><Link to="products" smooth={true} offset={-50} duration={500}>Products</Link></li>
          <li className='text-white cursor-pointer'><Link to="contactus" smooth={true} offset={-100} duration={500}>Contact </Link></li>         
        </ul>
        
        <div className='md:hidden mr-4 text-white' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

        </div>
      </div>
      


      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="products" smooth={true} offset={-50} duration={500}>Products</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="contactus" smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
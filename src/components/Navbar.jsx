import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';
export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute text-white z-20'>
      <div className='z-40'>
        <h1 className='z-40'> Beaches </h1>
      </div>
      <ul className='hidden md:flex'>
        <li> Home </li>
        <li> Destinations </li>
        <li> Travel </li>
        <li> View </li>
        <li> Book </li>
      </ul>
      <div className='hidden md:flex gap-2'>
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleShow} className='md:hidden z-10 '>
        {show ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      <div
        onClick={handleShow}
        className={
          show
            ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col '
            : 'absolute left-[-100%]'
        }
      >
        <ul className='text-black'>
          <br></br>
          <li className='border-b'> Home </li>
          <li className='border-b'> Destinations </li>
          <li className='border-b'> Travel </li>
          <li className='border-b'> View </li>
          <li className='border-b'> Book </li>
          <div className='flex flex-col '>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

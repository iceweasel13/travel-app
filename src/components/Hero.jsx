import React from 'react';
import beachVideo from '../assets/beachVid.mp4';
import { AiOutlineSearch } from 'react-icons/ai';
export const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        src={beachVideo}
        autoPlay
        loop
        muted
        className='w-full h-full object-cover'
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>
          Travel to the most beautiful beaches in the world
        </h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100 my-2'>
          <div>
            <input
              type='text'
              placeholder='Search Destinations'
              className='bg-transparent w-[300px] sm:[400px] font[Poppins] focus:outline-none'
            />
          </div>
          <div>
            <button className='icon'>
              <AiOutlineSearch size={20} style={{ color: '#fffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

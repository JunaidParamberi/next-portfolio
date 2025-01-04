import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
  <div className='w-full flex justify-center items-center py-7'>
    <nav className='w-[80%] flex justify-between'> 
    <Link href='/'> 
        <h1 className=' font-bold text-3xl tracking-tighter'>Junaid Paramberi</h1>
    </Link>
    <div className=' flex gap-8'>
    <Link href='/home'>Home</Link>
    <Link href='/home'>About</Link>
    <Link href='/home'>Works</Link>
    <Link href='/home'>Blog</Link>
    <Link href='/home'>Gallery</Link>
    </div>
    </nav>
  </div>
  )
};

export default Navbar;

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
  <div className='w-full flex justify-center items-center py-7'>
    <nav className='w-[80%] flex justify-between'> 
    <Link href='/'> 
        <h1 className=' font-bold text-3xl tracking-tighter'>Junaid Paramberi</h1>
    </Link>
    <div>
    <Link href='/home'>Home</Link>
    </div>
    </nav>
  </div>
  )
};

export default Navbar;

import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-bold'>BrandName</h1>
        <ul className='flex space-x-4'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#features'>Features</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

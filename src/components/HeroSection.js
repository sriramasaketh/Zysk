import React from 'react'

const HeroSection = () => {
  return (
    <section id='home' className='bg-gray-100 p-10 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Welcome to Our Platform</h2>
      <p className='text-lg text-gray-600 mb-6'>
        Discover amazing features designed just for you.
      </p>
      <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700'>
        Get Started
      </button>
    </section>
  )
}

export default HeroSection

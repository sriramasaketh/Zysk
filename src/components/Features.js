import React from 'react'

const Features = () => {
  return (
    <section id='features' className='p-10 bg-white'>
      <h3 className='text-2xl font-bold mb-6 text-center'>Features</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='p-4 border rounded shadow'>
          <h4 className='text-xl font-semibold mb-2'>Feature 1</h4>
          <p className='text-gray-600'>Description of feature 1.</p>
        </div>
        <div className='p-4 border rounded shadow'>
          <h4 className='text-xl font-semibold mb-2'>Feature 2</h4>
          <p className='text-gray-600'>Description of feature 2.</p>
        </div>
        <div className='p-4 border rounded shadow'>
          <h4 className='text-xl font-semibold mb-2'>Feature 3</h4>
          <p className='text-gray-600'>Description of feature 3.</p>
        </div>
      </div>
    </section>
  )
}

export default Features

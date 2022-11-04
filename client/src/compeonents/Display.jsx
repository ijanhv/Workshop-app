import React from 'react'
import WorkshopCard from './WorkshopCard'

const Display = () => {
  return (
    <div className='sm:w-full'>
      <section class="text-gray-600 body-font">
        <div class="container  px-6 sm:mr-3 py-2 mx-auto sm:grid grid-cols-2">
    
          <WorkshopCard />
          <WorkshopCard />
        </div>
  </section>
  </div>
  )
}

export default Display
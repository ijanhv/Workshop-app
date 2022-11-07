import React, { useEffect, useState } from 'react'
import WorkshopCard from './WorkshopCard'

const Display = () => {
  
  const [ workshopData, setWorkshopData ] = useState(null);

  const getData = async () => {
      try {
          const res = await fetch('/workshop', {
              method: "GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
              credentials: "include"
          })

          const data = await res.json();
          console.log(data)
          setWorkshopData(data)

          if (!res.status === 200) {
              const error = new Error(res.error)
              throw error
          }
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
      getData()
  }, []);
  return (
    <div className='sm:w-full'>
      <section class="text-gray-600 body-font">
        <div class="container  px-6 sm:mr-3 py-2 mx-auto sm:grid grid-cols-2">
        {workshopData && workshopData.map((ws) => (
            <WorkshopCard key={ws._id} ws={ws} />
        ))}
        </div>
  </section>
  </div>
  )
}

export default Display
import React from 'react'

const Create = () => {
  return (
    <div className='sm:w-full sm:mr-20 sm:ml-8 sm:mt-[17px]'>
        <form className=''>
            <div className='w-[350px] sm:w-full sm:h-screen '>

                <div className='w-[330px] sm:h-[200px] h-[300px] sm:w-full flex m-7 rounded-[19px]'>
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horizontal-vivid-varitone-ocean-sunset-horizon-blur-abstraction-nickolay-loginov.jpg" className='sm:object-fill sm:w-full object-fit rounded-[16px] border' alt="" />
                </div>
                <div className='sm:grid grid-cols-2 mr-7 mb-5'>
                    <div >
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Name</label>
                            <input type="text" name="name" id="name" placeholder="Talk Show..." class="block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Type</label>
                            <input type="text" name="name" id="name" placeholder="Talk Show..." class="block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Date</label>
                            <input type="text" name="name" id="name" placeholder="Talk Show..." class="block py-2.5 px-2 w-full font-[400] sm:w-[370px] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                    </div>
                    <div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Venue</label>
                            <input type="text" name="name" id="name" placeholder="Talk Show..." class="block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop URL</label>
                            <input type="text" name="name" id="name" placeholder="Talk Show..." class="block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        </div>
                    </div>
                    <div className='justify-center ml-32 sm:mt-4 sm:ml-96  mb-4'>
                            <button className='font-[700] text-[15px]text-center p-2 bg-primary rounded-md font-roboto text-white'>Create Workshop</button>
                    </div>  
                </div>
                        
          
        </form>
    </div>
  )
}

export default Create
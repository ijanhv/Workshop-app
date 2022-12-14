import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineWifi } from 'react-icons/ai'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'

const WorkshopCard = ({ ws, setSelected }) => {

  // const handleEdit = () => {
  //   setSelected('edit')

  // }

  return (
    <div>
        <div class="sm:w-[350px] sm:mx-16 p-4 ">
              <div class="bg-[#D9D9D9] p-0 rounded-[9px]">
                <img class="h-40 rounded w-full object-cover  object-center mb-2" src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg" alt="content" />
                <div className='p-3'>
                    <div className='flex justify-between'>
                        <h3 class=" text-[20.06px] font-roboto font-[500] text-black title-font">{ws.name}</h3>
                         <p className='text-xs inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-center font-bold bg-[#20AFEC] text-[#2608DF] rounded-full '>{ws.type}</p>   
                    </div>
                    
                    <div className='flex content-center mt-4'>
                        <FaRegCalendarAlt className='text-xl text-[#716D6D] mt-1 mr-3'/>
                        <h2 class="text-lg font-roboto text-gray-900 font-[800] title-font mb-4">{ws.date}</h2>
                    </div>

                    <div className='flex content-center'>
                        <AiOutlineWifi className='text-xl #716D6D mt-1 mr-3'/>
                        <h2 class="text-lg font-roboto text-[#1A30F4] font-[400] title-font text-[13px] mb-4"> {ws.url}</h2>
                    </div>
                    <div className='flex justify-end mr-3'>
                     <Link to={`/edit/${ws._id}`}>
                      <MdModeEdit className='text-xl hover:animate-bounce cursor-pointer text-black' />
                    </Link>
                    </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default WorkshopCard
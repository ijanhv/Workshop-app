import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css'
// import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';


const Create = ({  }) => {
    const [date, setDate] = useState(new Date());

        // const [ workshopData, setWorkshopData ] = useState({})
        
        const [ workshop, setWorkshop ] = useState({
          name:"", type:"", venue: "", url:"", date:""
      });
      
      let name, value;
      
      const handleInputs = (e) => {
          name = e.target.name;
          value = e.target.value;
      
          setWorkshop({ ...workshop, [name]: value})
      }

      const PostWorkshopDetails = async (e) => {
  
        e.preventDefault();
    
        const { name, type, venue, url } = workshop;
        
        
        const res = await fetch('/workshop', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, type, venue, date, url
            })
        });
    
        const data = await res.json();
        console.log(data);
    
        if(res.status === 400 || !data) {
            window.alert("Details Not filled")
            console.log("Details Not filled");
        } else {
            window.alert("Details Successfully filled")
            console.log("Details Successfully filled");
            
            // setAuthState('login') 
        }
    }

  return (
    <div className='sm:w-full sm:mr-20 sm:ml-8 sm:mt-[17px]'>
        <form method='POST' className=''>
            <div className='w-[350px] sm:w-full sm:h-screen '>

                <div className='w-[330px] sm:h-[200px] h-[300px] sm:w-full flex m-7 rounded-[19px]'>
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horizontal-vivid-varitone-ocean-sunset-horizon-blur-abstraction-nickolay-loginov.jpg" className='sm:object-fill sm:w-full object-fit rounded-[16px] border' alt="" />
                </div>
                <div className='sm:grid grid-cols-2 mr-7 mb-5'>
                    <div >
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Name</label>
                            <input onChange={handleInputs} type="text" name="name" id="name" value={workshop.name} placeholder="Talk Show..." className="font-roboto block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Type</label>
                            <input onChange={handleInputs} type="text" name="type" id="type" value={workshop.type} placeholder="Online/In Person" className="font-roboto block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Date</label>
                            {/* <input onChange={handleInputs} type="text" name="date" id="date" value={workshop.date} placeholder="dd/mm/yyyy hh:mm:ss" className="font-roboto block py-2.5 px-2 w-full font-[400] sm:w-[370px] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required /> */}
                            <DateTimePicker format="dd-MM-y h:mm a" onChange={setDate} name="date" id="date" value={date} />
                            

                        </div>
                    </div>
                    <div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop Venue</label>
                            <input onChange={handleInputs} type="text" name="venue" id="venue" value={workshop.venue} placeholder="Delhi, India" className="font-roboto block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        <div class="relative ml-8 w-full mb-4 group">
                            <label className="text-primary font-roboto font-[600] " htmlFor='name' >Workshop URL</label>
                            <input onChange={handleInputs} type="text" name="url" id="url" value={workshop.url} placeholder="zoom / google meet url" className="font-roboto block py-2.5 px-2 w-full sm:w-[370px] font-[400] text-[15px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required />
                        </div>
                        </div>
                    </div>
                    <div className='justify-center ml-32 sm:mt-4 sm:ml-96  mb-4'>
                            <button onClick={PostWorkshopDetails} className='font-[700] text-[15px]text-center p-2 bg-primary rounded-md font-roboto text-white'>Create Workshop</button>
                    </div>  
                </div>
                        
        </form>
    </div>
  )
}

export default Create
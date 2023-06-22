import React from 'react';
import {TfiLocationPin} from 'react-icons/tfi';
import {LuPhoneCall} from 'react-icons/lu'

const Topnav = () => {
  return (
    <div>
    <div className='bg-white-100 w-full flex justify-between px-[5%]'>
    <div className=' flex  px-1 '> <TfiLocationPin className=' text-green-900 mt-1 mr-1'/>Hyderabad</div>
    <div  className='  flex  px-1'  ><LuPhoneCall className='text-green-900 mt-1 mr-2'/> +91 7674946379</div>
    
  </div>
  </div>
  )
}

export default Topnav
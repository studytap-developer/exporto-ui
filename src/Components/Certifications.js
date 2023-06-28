import React from 'react';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';

const Certifications = () => {
  return (

    <div>


<div className=' w-[70%] ml-[15%]  mt-3 mb-3'>
          <h1 className='text-2xl text-white bg-green-950  rounded-full text-center p-3 '> CERTIFICATIONS</h1>
          
        </div>
      


      <div className='flex justify-between px-9 gap-4 py-9 '>
        <div>  <img src={c1} alt='' /></div>
        <div>  <img src={c2} alt='' /></div>
        <div> <img src={c3} className='rounded-md'   alt='' /></div>
        <div> <img src={c4} alt='' /></div>
      </div>
    </div>
  )
}

export default Certifications;
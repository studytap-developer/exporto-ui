import React from 'react';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';
// Import the new images
import c5 from '../images/c5.png';
import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';
import c8 from '../images/c8.jpg';

const Certifications = () => {
  return (
    <div>
      <div className='w-[70%] ml-[15%] mt-3 mb-3'>
        <h1 className='text-2xl text-white bg-green-950 rounded-full text-center p-3'>CERTIFICATIONS</h1>
      </div>
      <div className='flex justify-between px-9 gap-4 py-9 flex-wrap'>
        <div> <img className='h-[80px] sm:h-[150px]' src={c1} alt='' /></div>
        <div> <img className='h-[80px] sm:h-[150px]' src={c2} alt='' /></div>
        <div> <img src={c3} className='rounded-md h-[80px] sm:h-[150px]' alt='' /></div>
        <div> <img  className='h-[80px] sm:h-[150px]' src={c4} alt='' /></div>
      </div>
      {/* Additional row of images */}
      <div className='flex justify-between px-9 gap-4 py-9 flex-wrap'>
        <div> <img className='h-[80px] sm:h-[150px]' src={c5} alt='' /></div>
        <div> <img className='h-[80px] sm:h-[150px]' src={c6} alt='' /></div>
        <div> <img src={c7} className='rounded-md h-[80px] sm:h-[150px]' alt='' /></div>
        <div> <img className='h-[80px] sm:h-[150px]' src={c8} alt='' /></div>
      </div>
    </div>
  )
}

export default Certifications;

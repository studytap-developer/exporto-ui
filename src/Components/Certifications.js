import React from 'react';
import c1 from '../Images/c1.png';
import c2 from '../Images/c2.png';
import c3 from '../Images/c3.png';
import c4 from '../Images/c4.png';
// Import the new images
import c5 from '../Images/c5.png';
import c6 from '../Images/c6.jpg';
import c7 from '../Images/c7.jpg';
import c8 from '../Images/c8.jpg';

const Certifications = () => {
  return (
    <div>
      <div className='w-[70%] ml-[15%] mt-3 mb-3'>
        <h1 className='text-2xl text-white bg-green-950 rounded-full text-center p-3'>CERTIFICATIONS</h1>
      </div>
      <div className='flex justify-between px-9 gap-4 py-9'>
        <div> <img src={c1} alt='' /></div>
        <div> <img src={c2} alt='' /></div>
        <div> <img src={c3} className='rounded-md' alt='' /></div>
        <div> <img src={c4} alt='' /></div>
      </div>
      {/* Additional row of images */}
      <div className='flex justify-between px-9 gap-4 py-9'>
        <div> <img src={c5} alt='' /></div>
        <div> <img src={c6} alt='' /></div>
        <div> <img src={c7} className='rounded-md' alt='' /></div>
        <div> <img src={c8} alt='' /></div>
      </div>
    </div>
  )
}

export default Certifications;

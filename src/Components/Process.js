import React from 'react';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';

const Process = () => {
  return (
   
    <div>
<div className='w-[50%] ml-[25%]  mb-3'>
<h1 className='text-md text-white bg-green-950  rounded-full text-center p-3'> Certifications</h1>
</div>
        

         <div className='flex justify-between px-9 gap-4 py-9 '> 
            <div>  <img src={c1} alt=''/></div>
            <div>  <img src={c2} alt=''/></div>
            <div> <img src={c3} alt=''/></div>
            <div> <img src={c4} alt=''/></div>
         </div>
    </div>
  )
}

export default Process
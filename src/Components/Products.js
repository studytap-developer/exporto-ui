import React from 'react';

import p2 from '../Images/p2.png';
import p3 from '../Images/p3.png';
import e from '../Images/e.jpg'

const Product = () => {
  return (
    <div> 
    <img src={p3} alt='' className='rounded:lg'/>
    <div> 
        <h1 className='text-center'> RED CHELLI  </h1>
        <div>
            <p className='text-gray-500'> Tailwind CSS isof this library a series of predefined classes for elements such as buttons or tables</p>
        </div>
    </div>
</div>
  )
}
const Products = () => {
  return (
    <div>
        <div className='mt-3 mb-3'>
            <h1 className='text-center text-2xl text-sky-500 '> OUR PRODUCTS </h1>
            <h2 className='text-center text-2xl'>PRODUCTS WE EXPORTS </h2>
        </div>


        <div className='flex-1  flex justify between gap-5 px-[10%] mb-9'>
 

    <div> 
    <img src={p2} alt='' className='w-[70%] rounded:md'/>
            <div> <h1 className='text-center'> COW DUNG </h1>
            <div>
            <p className='text-gray-500'> Tailwind CSS isof this library a series of predefined classes for elements such as buttons or tables</p>
            </div>
                </div>
    </div>
   
    <div> 
    <img src={p3} alt=''/>
            <div> <h1 className='text-center'> RED CHELLI POWDER </h1>
            <div>
            <p className='text-gray-500'> Tailwind CSS isof this library a series of predefined classes for elements such as buttons or tables</p>
            </div>
                </div>
    </div>
</div>



<div className=' w-[55%] ml-[25%]  mb-3'>
    <p  className='text-sm text-white bg-green-950  rounded-full text-center p-3'>Tell Us What Other Product You Are Lokking To Import ? </p>
</div>

<div>
<div className=' w-[65%] ml-[20%] mb-3 '>
    <p  className='text-md text-white bg-green-950  rounded-full text-center p-3'>How We Export</p>
</div>

<img src={e} alt='' className='ml-[5%]'/>
</div>



    </div>
  )
}

export default Products
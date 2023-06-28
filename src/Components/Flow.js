import React from 'react';
import pro from '../images/pro.png';
import sort from '../images/sort.png';
import packing from '../images/packing.png';
import shipping from '../images/shipping.png';


const Flow = () => {
  return (

<>
<div className='w-[50%] ml-[25%]  mb-3'>
        <h1 className='text-1xl text-white bg-green-950  rounded-full text-center  uppercase p-3'> HOW WE EXPORT</h1>
      </div>

    
    
    <div className="flex flex-wrap justify-center items-center px-3">

      <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex justify-center">
        <div className="text-center">
          <img src={pro} alt="Image 1" className="w-full h-auto  " />
          <div className="mt-2">
            <p className="text-lg font-medium uppercase">Procurement  </p> 
            <p className="text-sm text-gray-500">Procurement is the acquisition of goods or services by an organization from external sources.</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex justify-center">
        <div className="text-center">
          <img src={sort} alt="Image 2" className="w-full h-auto" />
          <div className="mt-2">
            <p className="text-lg font-medium uppercase">Sorting</p>
            <p className="text-sm text-gray-500">Sorting is the process of arranging items in a specific order based on a predetermined criterion.</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex justify-center">
        <div className="text-center">
          <img src={packing} alt="Image 3" className="w-full h-auto" />
          <div className="mt-2">
            <p className="text-lg font-medium uppercase"> Packing</p>
            <p className="text-sm text-gray-500">Packing is the act of preparing and arranging items into containers  for storage, transportation . </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex justify-center">
        <div className="text-center">
          <img src={shipping} alt="Image 4" className="w-full h-auto" />
          <div className="mt-2">
            <p className="text-lg font-medium uppercase"> Shipping</p>
            <p className="text-sm text-gray-500">Shipping is the process of transporting goods from one location to another involving logistics, and delivery. </p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Flow
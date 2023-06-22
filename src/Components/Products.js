import React from 'react';

import cowdung from '../images/cowdung.png';
import redchilli_powder from '../images/p3.png';
import redchilli from  '../images/p1.png';
import BannerText from './banner_text';



const productsList = [
  { name: "red chilli", description: "Some description here for red chilli.", image: redchilli},
  { name: "Cow dung", description: "Some description here for cow dung.", image: cowdung},
  { name: "red chilli powder", description: "Some description here for red chilli powder.", image: redchilli_powder},
]

const Product = ({name, description, image}) => {
  return (
    <div className='mb-[20px]'> 
      <img src={image} alt='' className='rounded-lg'/>
      <div> 
        <h2 className='text-center text-lg uppercase mt-1'> {name} </h2>
        <div className='text-center'>
          <p className='text-gray-500'> {description} </p>
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  return (
    <>
      <div className='my-[20px] px-2'>
        <div className='mt-3 mb-3'>
          <h1 className='text-center text-2xl text-sky-500 '> OUR PRODUCTS </h1>
          <h2 className='text-center text-2xl'>PRODUCTS WE EXPORTS </h2>
        </div>
        <div className='flex justify-around flex-col sm:flex-row items-center'>
          {
            productsList.map((product, i) => (
              <Product key={i} {...product} /> 
            ))
          }
        </div>
      </div>
      {/* <BannerText classNames='px-[200px]' /> */}
    </>
  )
}

export default Products
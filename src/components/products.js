import React from 'react';

import cowdung from '../Images/cowdung.png';
import redchilli_powder from '../Images/greenchilli.jpg';
import redchilli from  '../Images/redmirchi.png';
import maze from '../Images/maze.jpg' 


const productsList = [
  { name: "red chilli", description: "A fiery spice used in cooking for flavor and heat.", image: redchilli},
  { name: "Cow dung", description: "Eco-friendly fertilizer and energy source.", image: cowdung},
  { name: "green chilli ", description: " Adds a zing to dishes with its spicy kick.", image: redchilli_powder},
  { name: "Maize ", description: " A versatile cereal crop with culinary and industrial uses.", image: maze}, 
]


const Product = ({name, description, image}) => {
  return (
    <div className='mb-[20px]'> 
      <img src={image} alt='' className='rounded-lg h-40 w-50 p-1 mx-auto'/>
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
    <div name='products'>
      <div className='py-[40px] px-2'>
        <div className='mt-3 mb-3'>
          <h1 className='text-center text-2xl'> OUR <span className='text-sky-500'> PRODUCTS </span>  </h1>
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

      <h1 className='text-center text-sky-500 mb-4 text-lg underline '>Tell Us What Other Products That You Are Looking For ? </h1>
      {/* <BannerText classNames='px-[200px]' /> */}
    </div>
  )
}

export default Products
import React from 'react';

import cowdung from '../images/cowdung.png';
import redchilli_powder from '../images/greenchilli.jpg';
import redchilli from  '../images/redmirchi.png';





const productsList = [
  { name: "red chilli", description: "A spicy and fiery pepper commonly used as a seasoning or ingredient in various cuisines.", image: redchilli},
  { name: "Cow dung", description: "Animal waste produced by cows, often used as fertilizer in agriculture and fuel in some regions.", image: cowdung},
  { name: "green chilli ", description: "A spicy and vibrant addition to any dish, adding a fiery kick to your taste buds.", image: redchilli_powder},
]

const Product = ({name, description, image}) => {
  return (
    <div className='mb-[20px] flex flex-col'> 
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
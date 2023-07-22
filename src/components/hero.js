import React from 'react';




const Hero = () => {
    return (
        <div>
            <div className=" bg-[url('Herobg.png')] bg-cover bg-bottom sm:flex min-h-[600px] py-[100px] px-[40px] ">
            
                <div className='flex-1  justify-center  items-center text-center     '>
                    <div className='text-center  p-[10%]'>



                        <div className='text-gray-400 text-[40px] text-center   '>Sourcing The World,<br /></div>
                        <div className='text-gray-400 text-[40px] text-center '>Delivering Excellence</div>
                        <div><p className='text-white text-center text-[20px] '> Global flavors at your fingertips: Imports and exports connecting <br /> you to a world of possibilities.</p></div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
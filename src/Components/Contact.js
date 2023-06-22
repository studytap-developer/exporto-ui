import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white'>
       <h1 className='text-center text-3xl  text-sky-500'> Contact Us </h1>


       <div className=' mt-9 px-[10%] py-[2%]'>
       <div className='bg-gray-200  rounded-lg'>
       <div className="bg-[url('contact.png')]  bg-cover min-h-[400px]  ">
        <div className=' text-center' >

        <div className="max-w-md mx-auto">
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className=" text-sm font-medium text-gray-700">
            Name:
          </label>
          <div className="mt-1 px-4">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className=" h-9 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <div className="mt-1 px-4">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className=" h-9 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  ssm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <div className="mt-1 px-4">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=" h-9 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company Name:
          </label>
          <div className="mt-1 px-4">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className=" h-9 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message:
          </label>
          <div className="mt-1 px-4">
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className=" h-[5%] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md mb-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>




       </div>
       </div>
     
       </div>


       </div>





    </div>
  )
}

export default Contact
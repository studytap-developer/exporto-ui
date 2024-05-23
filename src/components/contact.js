import React, { useState } from 'react';
import { post } from '../store/api';

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    post('contact', {data: formData, succ: () => {
      setFormData({})
      window.alert("Successfully submitted. We will get back to you shortly!")
    },
      err: (err) => window.alert(err)
    })
  };

  return (
    <div name='contactus'>

      <div className='w-[95%] ml-[3%] mb-[5%] mt-2' >
        <h1 className='text-2xl text-white bg-green-950  rounded-full text-center  uppercase p-3'> CONTACT US</h1>
      </div>

      <div
        className="flex items-center justify-center  bg-cover rounded-md md:mx-[20%]"
        style={{
          backgroundImage: `url(${require('../Images/contact.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',          
          marginBottom: '5%',
        }}
      >

        <form className='w-full pr-[15%] pl-[15%] pt-5 pb-5' onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type=""
              id="phone"
              name="phone_number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="company"
              name="company_name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-sky-500  text-white font-bold py-2 px-4 rounded "
              type="submit"
            >
              Submit
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


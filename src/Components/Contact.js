import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
<>

    <div className='w-[95%] ml-[3%]  mb-[5%]'>
    <h1 className='text-2xl text-white bg-green-950  rounded-full text-center  uppercase p-3'> CONTACT US</h1>
  </div>




    <div
      className="flex items-center justify-center  bg-cover rounded-md"
      style={{
        backgroundImage: `url(${require('../images/contact.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginLeft: '20%',
        marginRight: '20%',
        
        marginBottom: '5%',
      }}
    >

<form className='w-full pr-[15%] pl-[15%] pt-5 pb-5'>
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
    type="tel"
    id="phone"
    name="phone"
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
    name="company"
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


    </>
  );
};

export default Contact;


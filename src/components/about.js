
import React,{useState} from 'react';
import logo from '../Images/logo.png';



const Popup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative bg-white w-[80%] px-4 py-4">
        <div className="flex justify-end pb-3">
          <button className="text-gray-600 hover:text-gray-900" onClick={onClose}>
            <svg
              xmlns={logo}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto h-64 text-gray-700">
          <div className='bg-green-950'>
          <img className="mx-auto mb-1" src={logo} alt=" " />
          </div>
          
          <p>Embarking on a remarkable family legacy, <b className='text-black'>Exporto Enterprises LLP</b> is the brainchild of <b className='text-black'>Mr. Konijeti Mallikarjuna Prasad</b> and his son, <b className='text-black'>Konijeti Venkata Mahesh Gupta</b>. For over <b className='text-black'>52</b> years, <b className='text-black'>Mr. Konijeti Mallikarjuna Prasad </b> has successfully led Madhu Traders in the local red chilli business, earning a reputation for excellence.</p> 
          <p>With the next generation taking the lead, <b className='text-black'>Konijeti Venkata Mahesh Gupta(Founder & CEO)</b> brings a fresh perspective and a burning ambition to expand the business beyond local boundaries. Together, they have established <b className='text-black'> Exporto Enterprises LLP,</b> with Konijeti Venkata Mahesh Gupta at the forefront as the driving force behind the company's export operations.</p> 
          <p> <b className='text-black'>Konijeti Venkata Mahesh Gupta's</b>  vision and passion for growth have fueled our desire to reach new markets and share our superior agricultural products on a global scale. While honoring his father's legacy, <b className='text-black'>Konijeti Venkata Mahesh Gupta</b> embraces the challenge of managing and propelling <b className='text-black'>Exporto Enterprises LLP</b> towards international success.</p> 
          <p>With <b className='text-black'>Konijeti Venkata Mahesh Gupta's </b>leadership and dedication to excellence, we are committed to delivering top-quality products and impeccable service to our valued customers. The combination of <b className='text-black'>Mr. Konijeti Mallikarjuna Prasad's </b>expertise and <b className='text-black'>Konijeti Venkata Mahesh Gupta's</b> entrepreneurial spirit sets us on a path of unparalleled success and expansion in the global marketplace.</p><br />
          <p>Join us on this extraordinary journey as we build upon the strong foundation established by <b className='text-black'>Mr. Konijeti Mallikarjuna Prasad,</b> and together, we make <b className='text-black'>Exporto Enterprises LLP</b> a shining example of excellence in the export industry.</p><br />
        </div>
      </div>
    </div>
  );






const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
      setIsOpen(true);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };



  return (



    <div  className='w-full  bg-white flex flex-col justify-between' name='about'>
      <h1 className='text-center text-sky-500 text-2xl mt-3'>WELCOME TO EXPORTO EXPORTS</h1>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto px-2 pt-5 gap-4'>
        <div className='rounded-md'>
          <img className='w-full object-cover h-full rounded-md' src='/images/cargo-goods.jpg' alt="/" />
        </div>
        <div className='md:items-start w-full'>
          <p className='text-gray-800'>EXPORTO Enterprises  is based in India! We are a dynamic and reliable business that specializes in facilitating  the exchange of goods and services  between India and the rest of the world. Our experienced team of professionals  is committed to providing you with efficient and cost-effective solutions for your importing and exporting needs.</p>
          
          <p className=' text-gray-800'>Whether you are looking to import raw materials, finished products, or to export high-quality Indian goods to market in your country, we have the expertise and resources to help you succeed.</p>
          <p className='text-gray-800'>At our company, we value transparency, integrity, and customer satisfaction. We believe in building Long-term relationships with our clients by providing personalized service, timely communication, and reliable delivery. Our goal is to help you achieve your business objectives by minimizing risks, maximizing opportunities, and optimizing your supply chain.</p>
          <p className='text-gray-800'>So, whether you are a small business or a multinational corporation, we are here to support you every step of the way. Contact us today to learn more about how we can help you succeed in the global marketplace.</p>

          <div className='flex justify-center'>
            <button className='py-2 px-6 my-4 bg-sky-500 rounded-md w-full sm:w-fit ' onClick={openPopup}>Know More</button >
          </div>
          
          {isOpen && <Popup onClose={closePopup} />}
        </div>           
      </div>
    </div>
  )
}

export default About
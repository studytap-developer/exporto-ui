import React , { useState } from 'react';
import img1 from '../Images/img1.png'

const Explain = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className=''>

<div className='flex-1 justify-between  px-10 py-5  lg:flex   '>

<div> 
 <img src={img1} alt='' className=' rounded-md'  />
 </div>

 <div>
   <h1 className="text-2xl text-center text-sky-500 mt-2">WELCOME TO EXPORTO EXPORTS</h1>
   <p className='mt-4 mb-4 ml-[5%]' >Students pursuing Computer Science Engineering and having trouble finding Previous Year Question Papers <br/> online can get them here easily. We have uploaded the last ten years of question papers and answers on Study Tap. <br/>In addition,you can download semester-wise and, more specifically, subject-wise question papers from our app.</p>
   
 <div className='w-[40%] h-3 ml-[5%] mb-5'>
 <button
        className=" mt-1 hover:bg-sky-500 text-black font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Know Us
      </button>
 
 </div>


 {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-300 p-6 rounded-lg  h-[10%]shadow-lg">
            <h2 className="text-2xl mb-4">About Us</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              venenatis elit sit amet enim finibus, a luctus ipsum volutpat.
              Duis rhoncus rutrum faucibus.
            </p>
            <p className='mt-4 mb-4 ml-[5%]' >Study Tap is a dedicated web portal that hosts the previous year's question papers and answers to all the <br/>Engineering courses branch-wise. We believe that practice makes man perfect and so bring forth you the last<br/> ten year's question papers with answers for good practice. Students studying in the affiliated colleges<br/> of JNTUH can access and download the question and answer papers from Study Tap.</p>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}



 </div>
 
 </div>
 <div className='text-center bg-green-950 w-full h-14 text-white p-2 text-md'>We are committed to deliver a safe, equitable, and reliable transportation.</div>
</div>


  )
}

export default Explain
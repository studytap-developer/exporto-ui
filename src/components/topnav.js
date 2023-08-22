
import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { LuPhoneCall } from 'react-icons/lu';

const Topnav = () => {
  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="sticky top-0 bg-white flex justify-between px-1
    ">
      <div className="flex items-center px-1">
        <TfiLocationPin className="text-green-900 mt-1 mr-1" />  
        Hyderabad
      </div>
      <div className="flex items-center px-1 flex-wrap justify-end">
        <LuPhoneCall className="text-green-900 mt-1 mr-2" />
        <span
          onClick={() => handlePhoneClick('916301169527')}
          style={{ cursor: 'pointer' }}
        >
          +91 6301169527
        </span>
        ,{' '}
        <span
          onClick={() => handlePhoneClick('917674946379')}
          style={{ cursor: 'pointer' }}
        >
          +91 7674946379
        </span>
      </div>
    </div>
  );
};

export default Topnav;

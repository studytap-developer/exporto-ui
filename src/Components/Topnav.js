import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { LuPhoneCall } from 'react-icons/lu';

const Topnav = () => {
  return (
    <div className="sticky top-0 bg-white h-6 flex justify-between px-[5%] py-2 z-50">
      <div className="flex items-center px-1">
        <TfiLocationPin className="text-green-900 mt-1 mr-1" />
        Hyderabad
      </div>
      <div className="flex items-center px-1">
        <LuPhoneCall className="text-green-900 mt-1 mr-2" />
        +91 7674946379
      </div>
    </div>
  );
};

export default Topnav;

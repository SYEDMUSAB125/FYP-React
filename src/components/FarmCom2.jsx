import React from 'react';
import DataCard2 from './DataCard2';

function FarmCom2() {
  return (
    <div className="relative px-4 md:px-20 lg:px-40">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-10 mt-4">
        <div className="text-2xl md:text-3xl font-bold">
          GreenValley Farms
        </div>
        <div className="border-r-2 h-14 border-gray-400 hidden md:block"></div>
        <div className="text-2xl md:text-3xl font-bold">
          2024
        </div>
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
        <div>
          <p className="text-gray-400">Crop Name</p>
          <p className="text-xl md:text-2xl">Cotton</p>
        </div>
        <div>
          <p className="text-gray-400">Area</p>
          <p className="text-xl md:text-2xl">20 Acres</p>
        </div>
        <div>
          <p className="text-gray-400">Last Production</p>
          <p className="text-xl md:text-2xl">1000kg</p>
        </div>
      </div>
      <div className="mt-10">
        <DataCard2 />
      </div>
    </div>
  );
}

export default FarmCom2;

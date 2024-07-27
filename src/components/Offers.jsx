import React from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className='max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between'>
      <Link className='text-lg font-bold text-gray-700'>Weather predictions </Link>
      <Link className='text-lg font-bold text-gray-700'>Best Crop Choice </Link>
      <Link className='text-lg font-bold text-gray-700' to="/nodes" >Soil and Suited Fertilizer </Link>
      <Link className='text-lg font-bold text-gray-700'>Customer Support </Link>
      {/* <p className='text-lg font-bold text-gray-700'>Weather Predictions</p>
      <p className='text-lg font-bold text-gray-700'>Best crop choice</p>
      <p className='text-lg font-bold text-gray-700'>Soil and suited Fertilizer</p>
      <p className='text-lg font-bold text-gray-700'>Customer Support</p> */}
    </div>
  );
};

export default Offers;

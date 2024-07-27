import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/7286654/pexels-photo-7286654.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/2468399/pexels-photo-2468399.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/11070641/pexels-photo-11070641.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/15876334/pexels-photo-15876334.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Harvest With Us</h3>
        <p className='text-2xl py-4'>
          Who are we ?
        </p>
        <p className='pb-6 '>
        We are agricultural pioneers, dedicated to revolutionizing farming through sustainable practices and cutting-edge technology. At 'Plan Your Next Harvest With Us,' we offer more than just solutions; we provide partnerships built on trust, expertise, and a shared vision for the future of agriculture. With a deep understanding of farmers' challenges and a commitment to their success, we stand as your ally in navigating the complexities of modern farming. From harnessing the power of data to providing ongoing support, we're here to empower farmers worldwide to thrive in today's ever-evolving agricultural landscape.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Avail Services</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

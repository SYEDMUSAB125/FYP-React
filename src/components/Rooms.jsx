import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Better Harvest, Happy Farmers</h3>
        <p className='text-lg pt-4'>
        It is only the farmer who faithfully plants seeds in the Spring, who reaps a harvest in the Autumn....
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVpZ2h0JTNBJTIwMTQ4MSUyMHB4JTIwd2lkdGglM0ElMjAxOTc0JTIwcHglMjBhZ3JpY3VsdHVyZSUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlaWdodCUzQSUyMDE0ODElMjBweCUyMHdpZHRoJTNBJTIwMTk3NCUyMHB4JTIwYWdyaWN1bHR1cmUlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVpZ2h0JTNBJTIwMTQ4MSUyMHB4JTIwd2lkdGglM0ElMjAxOTc0JTIwcHglMjBhZ3JpY3VsdHVyZSUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;

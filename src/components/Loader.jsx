import Lottie from 'lottie-react';
import React from 'react';
import farmer from "../farmer.json"

function Loader() {
  return (
    <div className='absolute top-32 left-[600px]'  >
      {/* <img className='w-[60vw] h-[60vh] '
       src={ require("./images/loader.jpg")} /> */}
       <div className='w-[500px] h-[500px]' >
       <Lottie animationData={farmer} />
       </div>
       <h1 className="text-3xl font-bold text-gray-500 text-center"
        >Loading...</h1>
       
       
    </div>
  );
}

export default Loader;

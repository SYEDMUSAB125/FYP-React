import React from 'react';

function AddFarm() {
  return (
    <div className="hidden md:block h-[10px] mt-6">
    <div className="card w-full md:w-60 bg-green-400 shadow-lg p-4 h-[200px] ">
      <div className="card-body text-white">
        <p className="text-[15px] text-center">You can manage multiple farms here</p>
        <button className="ml-2 mb-1 mt-1 btn w-full md:w-36 bg-white">
          <span className="text-green-400 text-lg">+</span>
          <span className="text-xl"> Add Farm</span>
        </button>
        <figure className="h-[20vh] w-[10vw] relative left-[-10vh] ">
          <img src={require("./images/boycom.png")} alt="boy entry" />
        </figure>
      </div>
    </div>
  </div>
  );
}

export default AddFarm;

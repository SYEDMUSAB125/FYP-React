import React from 'react';
import { useNavigate } from 'react-router-dom';

function NodeHome() {
  const navigation = useNavigate();
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="absolute top-20 md:top-60 left-[10vw] hidden lg:block">
        <img src={require("./images/golden.png")} alt="crop" className="w-20 md:w-[30vw] relative z-10 " />
      </div>

      <div className="mt-5">
        <h1 className="text-green-400 text-center font-bold text-2xl md:text-3xl">
          Welcome to Soil Monitoring System
        </h1>
      </div>

      <div className="relative mt-10 md:mt-5 p-5 md:p-10 w-full max-w-2xl md:min-w-[60] md:min-h-[80vh]  border rounded-md shadow-md bg-white">
        <div className="absolute top-2 right-2">
          <svg
            onClick={() => {
              navigation("/");
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="stroke-green-400 fill-none hover:rotate-90 duration-300 group-active:stroke-green-200 group-active:duration-0"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width="1.5"
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </div>

        <div className="flex justify-center mt-5">
          <video
            width="300"
            height="300"
            className="w-[10vw] max-w-md"
            autoPlay
            muted
            loop
            src={require("./video/node.mp4")}
          />
        </div>

        <div className="flex flex-col items-center space-y-5 mt-10">
          <button
            onClick={() => { navigation('/soil') }}
            className="relative border hover:border-green-600 duration-500 group cursor-pointer text-white overflow-hidden h-14 w-56 rounded-md bg-green-600 p-2 flex justify-center items-center font-extrabold"
          >
            <p className="z-10">Node 1</p>
          </button>
          <button
            onClick={() => { navigation('/soil2') }}
            className="relative border hover:border-green-600 duration-500 group cursor-pointer text-white overflow-hidden h-14 w-56 rounded-md bg-green-600 p-2 flex justify-center items-center font-extrabold"
          >
            <p className="z-10">Node 2</p>
          </button>
          <button
            onClick={() => { navigation('/soil3') }}
            className="relative border hover:border-green-600 duration-500 group cursor-pointer text-white overflow-hidden h-14 w-56 rounded-md bg-green-600 p-2 flex justify-center items-center font-extrabold"
          >
            <p className="z-10">Node 3</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NodeHome;

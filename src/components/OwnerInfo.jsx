import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import AddFarm from './AddFarm';

function OwnerInfo() {
  const navigation = useNavigate();
  return (
    <div className="relative top-0">
      <div className="w-full md:w-80 bg-green-500 h-full md:h-[100vh] p-4 md:p-0 flex flex-col items-center">
        <div className='hidden lg:block' >
        <figure className="bg-yellow-300 hidden lg:flex lg:justify-center h-20 w-20 lg:h-[25vh] lg:w-[12vw] rounded-full mt-2 ">
          <img className="h-[20vh] w-[10vw] lg:h-[25vh] lg:w-[15vw] " src={require("./images/owner.png")} alt="Owner" />
        </figure>
        </div>
      
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mt-3">Huzaifa Bahadur</h2>
        <h2 className="text-lg md:text-xl text-gray-200 text-center">Farm manager</h2>
        <div className="mt-6">
          <ul className="menu menu-horizontal bg-yellow-300 rounded-box">
            <li>
              <a className="tooltip tooltip-warning tooltip-bottom" data-tip="Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => { navigation("/nodes"); }}
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-warning tooltip-bottom" data-tip="Details">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-warning tooltip-bottom" data-tip="Stats">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

       
      </div>
      <div className='absolute top-[50vh]  left-10  ' >
      <AddFarm  />
      </div>
   
    </div>

  );
}

export default OwnerInfo;

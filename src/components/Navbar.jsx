import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <div className=''>
        <img alt='something' className="mb-2 mr-2 w-11 h-11 z-20 inline-block" src='../logo_agriX.png'></img>
        <h1 className='text-white font-bold text-3xl z-20 inline-block'>AgriX</h1>
      </div>

      <HiMenuAlt3  onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in-out duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-green-600 px-4 py-7 flex-col z-10'
            : ' hidden absolute top-0 h-screen  ease-out duration-500 z-10'
        }
      >
         <div className=" text-white font-serif p-8">
      <h2 className="text-3xl font-bold mb-4">Our Smart Agriculture Product</h2>
      <p className="text-xl mb-6 hover:text-gray-300">
        Our smart agriculture product leverages cutting-edge technology to revolutionize farming practices. By
        integrating IoT sensors, AI algorithms, and data analytics, we empower farmers to make data-driven decisions,
        optimize resource usage, and increase yields sustainably.
      </p>
      <h2 className="text-3xl font-bold mb-4 ">Our Mission</h2>
      <p className="text-xl  hover:text-gray-300 ">
      At our organization, we dedicate ourselves to cultivating a vision wherein agriculture transcends mere productivity; it becomes a bastion of environmental stewardship and social accountability. Central to our mission lies the endeavor to democratize access to sophisticated farming technologies, an endeavor amplified by the remarkable benefits of soil sensor temperature monitoring.

Through the strategic deployment of soil sensor technology, we usher in a new era of agricultural excellence, where every soil particle becomes a data point in the pursuit of sustainable cultivation practices. By harnessing the power of real-time temperature monitoring, farmers gain invaluable insights into the intricate dynamics of their fields.

The advantages of soil sensor temperature monitoring are multifaceted. Firstly, it enables precise regulation of environmental conditions, ensuring optimal growth parameters for crops. By continuously monitoring soil temperature, farmers can mitigate the risks associated with temperature fluctuations, safeguarding crops against stress-induced damage and bolstering yield potentials.

Moreover, soil sensor technology facilitates proactive decision-making, empowering farmers to preemptively address issues such as water scarcity and nutrient deficiencies. 

Furthermore, soil sensor temperature monitoring serves as a sentinel against climate variability, offering early warnings of impending weather extremes. Armed with this foresight, farmers can implement adaptive strategies, ranging from adjusting planting schedules to deploying protective measures, thereby enhancing resilience against climate-induced disruptions.


In essence, soil sensor temperature monitoring transcends its role as a technological tool; it embodies a paradigm shift towards a more enlightened approach to farming—one that harmonizes productivity with environmental stewardship and social equity. By harnessing the transformative power of data-driven insights, we pave the way for a future where agriculture not only sustains livelihoods but also nurtures our planet for generations to come.
      </p>
      <h2 className="text-3xl font-bold mt-4 mb-4 ">Group Members</h2>
      <ul className='flex flex-col justify-center'>
         
         <li className='font-bold list-disc text-3xl '>Muhammad Huzaifa</li> 
         <li className='font-bold text-3xl list-disc'>Muhammad Ahmed</li>
         <li className='font-bold text-3xl list-disc'>Sufyan Dalla</li>
         <li className='font-bold text-3xl list-disc '> Syed Muhammad Musab </li>
       </ul>
    </div>
       
      </div>
    </div>
  );
};

export default Navbar;

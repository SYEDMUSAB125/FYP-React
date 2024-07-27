import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SoilData from './SoilData';

function Navigation() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/soil' element={<SoilData />} />
      </Routes>
    </div>
  );
}

export default Navigation;

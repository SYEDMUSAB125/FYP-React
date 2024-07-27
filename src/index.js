import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SoilData from './components/SoilData';
import NodeHome from './components/NodeHome';
import SoilData3 from './components/SoilData3';
import SoilData2 from './components/SoilData2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/soil",
    element: <SoilData/>,
  },
  {
    path: "/soil2",
    element: <SoilData2/>,
  },
  {
    path: "/soil3",
    element: <SoilData3/>,
  },
  {
    path: "/nodes",
    element: <NodeHome />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode >

<RouterProvider   router={router} />
   </React.StrictMode>
   
   
  
 
);



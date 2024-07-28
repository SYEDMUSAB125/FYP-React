
import React, { useEffect, useState } from 'react';
import { get, ref, set } from 'firebase/database';
import { database } from '../firebaseConfig';
import tempImg from './images/temp.png';
import soilImg from './images/soil.png';
import humidityImg from './images/Humidity.png';
import valveImg from './images/valve.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DataCard() {
  const [node, setNode] = useState([]);
  const [valveControl, setValveControl] = useState(false);
  const [aiPrediction, setAiPrediction] = useState(null);
  const [flag,setFlag] = useState(false);

  useEffect(() => {
    const nodeRef = ref(database, 'Node1');
    get(nodeRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataArray = Object.entries(snapshot.val());
          setNode(dataArray);
          setValveControl(snapshot.val().Valve_Control === 1);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const notify = () => {
    setInterval(() => {
      setFlag(true);
    } 
    , 4000);
    setTimeout(() => {
      clearInterval();
    }, 4001 )
  
    }
  useEffect(()=>{
    notify();
  },[flag])
  useEffect(() => {
    const fetchAiPrediction = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/getValues');
        const data = await response.json();
        setAiPrediction(data[0]);
        const message = data[0].Binary_Prediction === 0 
          ? 'No need for water around three days'
          : 'Valve should be on for 3 days';
          console.log(message);
        toast.info(message, {
          autoClose: false,
          onClose: () => {
            setTimeout(() => fetchAiPrediction(), 30000);
          }
        });
      } catch (error) {
        console.error('Error fetching AI prediction:', error);
      }
    };

    fetchAiPrediction();
    const interval = setInterval(fetchAiPrediction, 30000);

    return () => clearInterval(interval);

  }, []);


  const handleToggle = async () => {
    const newValue = !valveControl;
    setValveControl(newValue);
    
    try {
      await set(ref(database, 'Node1/Valve_Control'), newValue ? 1 : 0);
      await set(ref(database, 'Node1/Valve_State_Slave_1'), newValue ? "true" : "false");
    } catch (error) {
      console.error('Error updating the database:', error);
    }
  };

  if (node.length === 0) {
    return <div>Loading...</div>;
  }
 






  return (
    <div className="columns-2 space-y-8 " style={{ boxSizing: 'border-box' }}>
      <div className="card h-[30vh] w-[23vw] bg-base-100 shadow-xl">
        <figure>
          <img className='h-[15vh]' src={tempImg} alt="Temperature" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>Temperature</div>
            <div>{node[4][1]}</div>
          </div>
        </div>
      </div>

      <div className="card h-[30vh] w-[23vw] bg-base-100 shadow-xl">
        <figure>
          <img className="h-[185px] w-[400px]" src={soilImg} alt="Soil" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>Soil</div>
            <div>{node[2][1]}</div>
          </div>
        </div>
      </div>

      <div className="card h-[30vh] w-[23vw] bg-base-100 shadow-xl">
        <figure>
          <img className='h-[15vh]' src={humidityImg} alt="Humidity" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>Humidity</div>
            <div>{node[1][1]}</div>
          </div>
        </div>
      </div>

      <div className="card h-[30vh] w-[23vw] bg-base-100 shadow-xl">
        <figure>
          <img src={valveImg} alt="Valve" className='h-[15vh] w-full' />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>Valve</div>
            <div>
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked={valveControl}
                onChange={handleToggle}
              />
            </div>
          </div>
        </div>
      </div>
     {
       flag ? <ToastContainer /> : null
     }
    </div>
  );
}

export default DataCard;
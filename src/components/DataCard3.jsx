
import React, { useEffect, useState } from 'react';
import { get, ref, set } from 'firebase/database';
import { database } from '../firebaseConfig';
import tempImg from './images/temp.png';
import soilImg from './images/soil.png';
import humidityImg from './images/Humidity.png';
import valveImg from './images/valve.png';

function DataCard() {
  const [node, setNode] = useState([]);
  const [valveControl, setValveControl] = useState(false);

  useEffect(() => {
    const nodeRef = ref(database, 'Node3');
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

  const handleToggle = async () => {
    const newValue = !valveControl;
    setValveControl(newValue);
    
    try {
      await set(ref(database, 'Node3/Valve_Control'), newValue ? 1 : 0);
      await set(ref(database, 'Node3/Valve_State_Slave_3'), newValue ? "true" : "false");
    } catch (error) {
      console.error('Error updating the database:', error);
    }
  };

  if (node.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="columns-2 space-y-8" style={{ boxSizing: 'border-box' }}>
      <div className="card h-64 w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={tempImg} alt="Temperature" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>Temperature</div>
            <div>{node[4][1]}</div>
          </div>
        </div>
      </div>

      <div className="card h-64 w-80 bg-base-100 shadow-xl">
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

      <div className="card h-64 w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={humidityImg} alt="Humidity" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>Humidity</div>
            <div>{node[1][1]}</div>
          </div>
        </div>
      </div>

      <div className="card h-64 w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={valveImg} alt="Valve" className="h-[185px] w-[400px]" />
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
    </div>
  );
}

export default DataCard;


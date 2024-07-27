import React from 'react';
import {get,ref} from 'firebase/database';
import {database} from '../firebaseConfig';
import {useEffect , useState} from 'react';
import OwnerInfo from './OwnerInfo';
import FarmCom from './FarmCom';
import FarmCom3 from './FarmCom3';
function SNode() {
    const [node, setNode] = useState([]);
    useEffect(() => {
        const nodeRef = ref(database, 'Node2');
        get(nodeRef).then((snapshot) => {
            if (snapshot.exists()) {
               const dataArray = Object.entries(snapshot.val())
               setNode(dataArray)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);
  return (
    <div>
        {node.length === 0 ? "" :
        <div className='flex '>

     <OwnerInfo/>
     <FarmCom3 />
 


</div>
 }
 
    </div>
  );
}

export default SNode;


// {node[2][1] === true ? <h1>true</h1> : <h1>false</h1>}
// {node[3][1] === 1 ? <h1>ON</h1> : <h1>OFF</h1>}
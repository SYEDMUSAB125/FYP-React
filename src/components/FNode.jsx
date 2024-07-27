import React from 'react';
import {get,ref} from 'firebase/database';
import {database} from '../firebaseConfig';
import {useEffect , useState} from 'react';
import OwnerInfo from './OwnerInfo';
import FarmCom from './FarmCom';
function FNode() {
    const [node, setNode] = useState([]);
    useEffect(() => {
        const nodeRef = ref(database, 'Node1');
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
    <div >
      {node.length === 0 ? "" :
        <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0">
          <OwnerInfo    />
          <FarmCom />
        </div>
      }
    </div>
  );
}


export default FNode;

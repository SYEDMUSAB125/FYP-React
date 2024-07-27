
import React from 'react';
import { get, ref } from 'firebase/database';
import { database } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import TNode from './TNode';
function SoilData3() {
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
        <div  >

{
                node.length === 0 ? <Loader /> :
                    <> 
                    <TNode/>
                  
                         </>

            }
          











        </div>
    );
}

export default SoilData3;


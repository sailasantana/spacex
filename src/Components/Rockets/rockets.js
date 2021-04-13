import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import { useHistory } from 'react-router';
import './rockets.css';



export const Rockets = () => {

    const [rows, setRows] = useState([]);
    const [popUp, setPopup] = useState(false);

    const history = useHistory();


     const goBackHandle = () => {

      setTimeout(() => {
        history.goBack();
      }, 300);
        
    }

     const getTableHandle = () => {

        setPopup(!popUp)

    }

    const closePopUpHandle = () => {

        setPopup(false)
    }

    useEffect(async () => {
        const response = await  fetch('https://api.spacexdata.com/v3/rockets', {
          method: 'GET',
          headers : {
            'content-type': 'application/json'
          }
        } )
        const  data  = await response.json();
        setRows([...data])
      
      }, []);

    
    return ( 
      <div style ={{backgroundColor: "#3b3b65"}} >
        <div className = "Back-button-container">
          <button className = "Back-button" onClick = {goBackHandle}>Go Back</button> 
         </div>
        <button onClick = {getTableHandle} className = "Rockets-button">Rockets</button> 
         {rows.length > 0 && popUp ?
         <div className = "Pop-up-container">
           <div className = "Close-pop-up-container">  
           <button onClick = {closePopUpHandle} className = "Close-pop-up-button">x</button>
           </div>  
        <Table className = "Table-container" columns = {COLUMNS} data = {rows} />
          </div>
          : null
         } 
        
      </div>   
      
    );
  };
  
  
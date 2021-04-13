
import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import './past.css';


export const PastLaunches = () => {

    const [rows, setRows] = useState([]);
    const [popUp, setPopup] = useState(false);


    const getTableHandle = () => {

      setPopup(true)

    }

    const closePopUpHandle = () => {

        setPopup(!popUp)
    }

    useEffect(async () => {
      const response = await  fetch('https://api.spacexdata.com/v3/launches/past', {
        method: 'GET',
        headers : {
          'content-type': 'application/json'
        }
      } )
      const  data  = await response.json();
      setRows([...data])
    
    }, []);

    
    return ( 
      <div  className= "Past-main-container" >
      <button onClick = {getTableHandle} className = "Past-button">Past Launches</button> 
       {rows.length > 0 && popUp ?
         <div className = "Past-container">
          <button onClick = {closePopUpHandle} className = "Close-pop-up-button">x</button>  
          <Table columns = {COLUMNS} data = {rows} />
        </div> : null}
      </div>   
      
    );
  };
  
  



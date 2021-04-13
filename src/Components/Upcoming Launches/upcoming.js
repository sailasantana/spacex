
import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import './upcoming.css';


export const UpcomingLaunches = () => {

    const [rows, setRows] = useState([]);
    const [popUp, setPopup] = useState(false);


    const getTableHandle = () => {

      setPopup(true)

    }

    const closePopUpHandle = () => {

        setPopup(!popUp)
    }


    useEffect(async () => {
      const response = await  fetch('https://api.spacexdata.com/v3/launches/upcoming', {
        method: 'GET',
        headers : {
          'content-type': 'application/json'
        }
      } )
      const  data  = await response.json();
      setRows([...data])
    
    }, []);

    
    return ( 
      <div className = "Upcoming-container" >
        <button onClick = {getTableHandle} className = "Upcoming-button">Upcoming Launches</button> 
        {rows.length && popUp > 0 ?
         <div>
        <button onClick = {closePopUpHandle} className = "Close-pop-up-button">x</button>  
        <Table columns = {COLUMNS} data = {rows} />
        </div> : null}
      </div>   
      
    );
  };
  

 



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
        const response = await fetch('https://api.spacex.land/graphql/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
           query: `
           {
               launchesUpcoming {
                 details
                 mission_name
                 rocket {
                   rocket_name
                   rocket_type
                 }
                 launch_date_unix
                 launch_date_utc
               }
             }
             `,
          }),
        })
        const { data } = await response.json();
        const result = data.launchesUpcoming
        setRows([...result])
      
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
  

 


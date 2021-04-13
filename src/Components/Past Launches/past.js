
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
        const response = await fetch('https://api.spacex.land/graphql/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
           query: `
           {
             launchesPast(limit: 5) {
               mission_name
               launch_date_local
               launch_site {
                 site_name
               }
               rocket {
                 rocket_name
               }
               details
             }
           }`,
          }),
        })
        const { data } = await response.json();
        const result = data.launchesPast
        setRows([...result])
      
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
  
  



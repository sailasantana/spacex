
import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import './upcoming.css';


export const UpcomingLaunches = () => {

    const [rows, setRows] = useState([]);

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
      <div>
        {rows.length > 0 ?
         <div>
        <h1 className = "Upcoming-title">Upcoming Launches</h1>
        <Table columns = {COLUMNS} data = {rows} />
        </div> : null}
      </div>   
      
    );
  };
  

 


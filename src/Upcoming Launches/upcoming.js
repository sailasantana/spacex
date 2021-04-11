
import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';


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
        console.log(data)
        const result = data.launchesUpcoming
        console.log(result)
        setRows([...result])
      
      }, []);

    
    return ( 
      <div>
        <h1>Upcoming Launches</h1>
        <Table columns = {COLUMNS} data = {rows} />
      </div>   
      
    );
  };
  

 


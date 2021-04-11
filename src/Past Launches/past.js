
import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import { useTable } from 'react-table';


export const PastLaunches = () => {

    const [rows, setRows] = useState([]);

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
      <div>
        {rows.length > 0 ?
         <div>
         <h1>Past Launches</h1> 
        <Table columns = {COLUMNS} data = {rows} />
        </div> : null}
      </div>   
      
    );
  };
  
  



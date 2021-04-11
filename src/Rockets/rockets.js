import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import { useTable } from 'react-table';


export const Rockets = () => {

    const [rows, setRows] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://api.spacex.land/graphql/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
           query: `
                {
                  rockets {
                    name
                    boosters
                    description
                    cost_per_launch
                    country
                    mass {
                      lb
                    }
                  }
                }
                  `,
          }),
        })
        const { data } = await response.json();
        console.log(data)
        const result = data.rockets
        setRows([...result])
      
      }, []);

      useEffect(() => {
          console.log(rows)
          console.log(rows.result)
      }, [rows])


      const boosters = rows.map( row => <div>{row.boosters}</div>)
  
    return ( 
      <div>
        <Table columns = {COLUMNS} data = {rows} />
      </div>   
      
    );
  };
  
  
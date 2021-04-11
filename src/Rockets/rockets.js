import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import { useHistory } from 'react-router';



export const Rockets = () => {

    const [rows, setRows] = useState([]);
    const history = useHistory();


    function goBackHandle() {
  
      history.goBack()
  
    }

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
                    
                  }
                }
                  `,
          }),
        })
        const { data } = await response.json();
        const result = data.rockets
        setRows([...result])
      
      }, []);

    
    return ( 
      <div>
         <button onClick = {goBackHandle}>Go Back</button> 
         {rows.length > 0 ?
         <div>
          <h1>Rockets</h1> 
          <Table columns = {COLUMNS} data = {rows} />
          </div>
          : null
         } 
        
      </div>   
      
    );
  };
  
  
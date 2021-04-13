
import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';


export const PastLaunches = () => {

    const [rows, setRows] = useState([]);


    useEffect(async () => {
      const response = await  fetch('https://api.spacexdata.com/v3/launches/past?limit=6', {
        method: 'GET',
        headers : {
          'content-type': 'application/json'
        }
      } )
      const  data  = await response.json();
      setRows([...data])
    
    }, []);

    
    return ( 
      <div >
          <Table columns = {COLUMNS} data = {rows} name = 'Past Launches'/>        
      </div>   
      
    );
  };
  
  



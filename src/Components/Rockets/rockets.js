import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import { useHistory } from 'react-router';




export const Rockets = () => {

    const [rows, setRows] = useState([]);

    const history = useHistory();


    const goBackHandle = () => {

     setTimeout(() => {
       history.goBack();
     }, 300);
       
   }


    useEffect(async () => {
        const response = await  fetch('https://api.spacexdata.com/v3/rockets', {
          method: 'GET',
          headers : {
            'content-type': 'application/json'
          }
        } )
        const  data  = await response.json();
        setRows([...data])
      
      }, []);

    
    return ( 
      <div>
        <div className = "Back-button-container">
          <button className = "Back-button" onClick = {goBackHandle}>Go Back</button> 
        </div>    
        <Table className = "Table-container" columns = {COLUMNS} data = {rows} name = 'Rockets' />   
      </div>   
      
    );
  };
  
  
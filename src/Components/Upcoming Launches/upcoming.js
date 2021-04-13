
import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';


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
      <div  >
        <Table columns = {COLUMNS} data = {rows} name = 'Upcoming Launches'/>
      </div>   
      
    );
  };
  

 


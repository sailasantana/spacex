import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { Table } from '../Table/table';
import { useHistory } from 'react-router';
import './rockets.css';



export const Rockets = () => {

    const [rows, setRows] = useState([]);
    const [popUp, setPopup] = useState(false);

    const history = useHistory();


     const goBackHandle = () => {
  
      history.goBack()
  
    }

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
      <div    style ={{backgroundColor: "#3b3b65"}} >
        <div className = "Back-button-container">
          <button className = "Back-button" onClick = {goBackHandle}>Go Back</button> 
         </div>
        <button onClick = {getTableHandle} className = "Rockets-button">Rockets</button> 
         {rows.length > 0 && popUp ?
         <div className = "Pop-up-container">
           <div className = "Close-pop-up-container">  
           <button onClick = {closePopUpHandle} className = "Close-pop-up-button">x</button>
           </div>  
        <Table className = "Table-container" columns = {COLUMNS} data = {rows} />
          </div>
          : null
         } 
        
      </div>   
      
    );
  };
  
  
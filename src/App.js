import React, { useState, useEffect } from 'react';
import { Table } from './Table/table';
import { COLUMNS } from './Rockets/columns';
import { Rockets } from './Rockets/rockets';

const App = () => {

  const [rows, setRows] = useState([]);



  // useEffect( async () => {
  //   const response = await fetch('https://api.spacex.land/graphql/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //      query: `
  //           {
  //             rockets {
  //               name
  //               boosters
  //               description
  //               cost_per_launch
  //               country
  //               mass {
  //                 lb
  //               }
  //             }
  //           }
  //             `,
  //     }),
  //   })
  //   const { data } = await response.json();
  //   console.log(data)
  //   const result = data.rockets
  //   console.log(result)
  //   setRows(result)
  //     console.log(rows)
   
  
  // }, []);
 

  return (
    <div>
      <Rockets />
      
    </div>
   
  );
};

export default App;

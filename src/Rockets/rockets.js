import React, { useState, useEffect } from 'react';


const Rockets = () => {

    const fetchData = async () => {
  
      const resp = await fetch('https://api.spacex.land/graphql/', {
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
              type
            }
          }
            `,
        }),
      });
      const { data } = await resp.json();
      console.log(data)
    }
  
    useEffect(() => {
      console.log('useEffect runs');
      fetchData();   
    }, []);
  
  
    return (
      <div >
       
      </div>
    );
  };
  
  export default Rockets;
  
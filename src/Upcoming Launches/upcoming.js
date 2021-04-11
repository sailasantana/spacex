import React, { useState, useEffect } from 'react';


const UpcomingLaunches = () => {

  const fetchData = async () => {

    const resp = await fetch('https://api.spacex.land/graphql/', {
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
    });
    const { data } = await resp.json();
  }

  useEffect(() => {
    fetchData();   
  }, []);


  return (
    <div >
     
    </div>
  );
};

export default UpcomingLaunches;

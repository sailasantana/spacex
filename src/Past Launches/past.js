import React, { useState, useEffect } from 'react';


const PastLaunches = () => {

  const fetchData = async () => {

    const resp = await fetch('https://api.spacex.land/graphql/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        {
          launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
            links {
              article_link
              video_link
            }
            rocket {
              rocket_name
              first_stage {
                cores {
                  flight
                  core {
                    reuse_count
                    status
                  }
                }
              }
              second_stage {
                payloads {
                  payload_type
                  payload_mass_kg
                  payload_mass_lbs
                }
              }
            }
            ships {
              name
              home_port
              image
            }
          }
        }`,
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

export default PastLaunches;

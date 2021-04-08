import React, { useState, useEffect } from 'react';
import UpcomingLaunches from './Upcoming Launches/upcoming';
import PastLaunches from './Past Launches/past';
import Rockets from './Rockets/rockets';

const App = () => {

  return (
    <div>
      <PastLaunches />
      <UpcomingLaunches />
      <Rockets /> 
    </div>
   
  );
};

export default App;

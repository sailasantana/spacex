import React, { useState, useEffect } from 'react';
import { Table } from './Table/table';
import { COLUMNS } from './Rockets/columns';
import { Rockets } from './Rockets/rockets';
import { UpcomingLaunches } from './Upcoming Launches/upcoming';
import { PastLaunches } from './Past Launches/past';

const App = () => {


 

  return (
    <div>
      <Rockets />
      <UpcomingLaunches />
      <PastLaunches />
    </div>
   
  );
};

export default App;

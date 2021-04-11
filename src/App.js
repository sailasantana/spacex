import { Rockets } from './Rockets/rockets';
import { UpcomingLaunches } from './Upcoming Launches/upcoming';
import { PastLaunches } from './Past Launches/past';
import { Route, Switch } from 'react-router-dom'
import { Home } from './Home/home';
import React from 'react';


const App = () => {


 

  return (
    <div>
      <Route exact path = '/' component={Home}/>   
      <Route path = '/tables' component = {Rockets} />
      <Route path = '/tables' component = {UpcomingLaunches} />
      <Route path = '/tables' component = {PastLaunches} />
    </div>
   
  );
};

export default App;

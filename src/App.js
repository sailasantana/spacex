import { Rockets } from './Components/Rockets/rockets';
import { UpcomingLaunches } from './Components/Upcoming Launches/upcoming';
import { PastLaunches } from './Components/Past Launches/past';
import { Route, Switch } from 'react-router-dom'
import { Home } from './Components/Home/home';
import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';


const App = () => {


 

  return (
    <div>
      <ErrorBoundary>
        <Route exact path = '/' component={Home}/> 
        <div className = "Tables-view-container">
        <Route path = '/tables' component = {Rockets} />
        <Route path = '/tables' component = {UpcomingLaunches} />
        <Route path = '/tables' component = {PastLaunches} />
        </div> 
      </ErrorBoundary> 
    </div>
   
  );
};

export default App;

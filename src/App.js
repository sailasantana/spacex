import React from 'react';
import { Route } from 'react-router-dom'
import { Home } from './Components/Home/home';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { List } from './Components/Table List/list';


const App = () => {



  return (
    <div>
      <ErrorBoundary>
        <Route exact path = '/' component={Home}/> 
        <Route path = '/tables' component = {List} />
      </ErrorBoundary> 
    </div>
   
  );
};

export default App;

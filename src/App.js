import { Route, Switch } from 'react-router-dom'
import { Home } from './Components/Home/home';
import React, { useEffect } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { List } from './Components/Table List/list';


const App = () => {

  // useEffect(() => {

  //   fetch('https://api.spacexdata.com/v3/launches/upcoming', {
  //     method: 'GET',
  //     headers : {
  //       'content-type': 'application/json'
  //     }
  //   } )
  //   .then(res => {
  //     if(!res.ok){
  //      return res.json().then(e  => Promise.reject(e))
  //     }
  //     return res.json()
  //   })
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

 

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

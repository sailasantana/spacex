
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import UpcomingLaunches from './upcoming';

it ('renders app without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <UpcomingLaunches/>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
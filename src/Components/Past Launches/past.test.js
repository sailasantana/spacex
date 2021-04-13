
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import PastLaunches from './past';

it ('renders app without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <PastLaunches/>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
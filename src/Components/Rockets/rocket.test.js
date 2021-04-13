
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Rockets from './rockets';

it ('renders app without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <Rockets/>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
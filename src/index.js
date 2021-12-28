import React from 'react';
import ReactDOM from 'react-dom';
import Home from './features/home';
import './index.css';

const title = process.env.REACT_APP_TITLE;

ReactDOM.render(
  <Home title={title} />
  ,
  document.getElementById('root')
);
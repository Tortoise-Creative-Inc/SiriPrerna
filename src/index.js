import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './ScrollTotop';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <ScrollToTop/>
    <App />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);


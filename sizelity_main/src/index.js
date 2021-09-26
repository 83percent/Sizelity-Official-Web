import React from 'react';
import {render, hydrate} from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    , rootElement);
} else {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    , rootElement);
}
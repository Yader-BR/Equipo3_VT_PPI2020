import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import App from "./App";

const rootElement = document.getElementById("root");
 ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

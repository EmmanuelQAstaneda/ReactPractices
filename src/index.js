import React from "react";
import ReactDOM from "react-dom";
import PrimerApp from "./PrimerApp";
//import CounterApp from './CounterApp';
import "./index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimerApp titulo="Are you ready for the Metal?" />, divRoot);
//ReactDOM.render(<CounterApp value = {1} />, divRoot)

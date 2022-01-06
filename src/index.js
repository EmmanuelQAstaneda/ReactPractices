import React from "react";
import ReactDOM from "react-dom";
import PrimerApp from "./PrimerApp";
import CounterApp from './CounterApp';
import "./index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimerApp titulo="Sorteo de una semana de vacaciones con todo incluido" />, divRoot);
//ReactDOM.render(<CounterApp value = {1} />, divRoot)
